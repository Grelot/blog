+++
template = "page.html"
title = "Virtual environments, containers and scientific reproducibility"
date =  2018-01-19
draft = false
tags = ["tech", "sciences"]
lang = "en"
+++

## The need to produce reproducible experiments in computer science

### What is reproducibility ?

**Reproducibility** is the closeness of the agreement between the results of *measurements* of the same *measurand* carried out with the same methodology described in the corresponding scientific evidence (*e.g.* a publication in a peer-reviewed journal and associated source code)

### Why work in a reproducible way ?

In practice, this serves to validate scientific experience without guaranteeing its accuracy, correctness or relevance. It is also relevant to test assumptions and facilitate the publication of results. About computer sciences, numerical calculation and modelisation must be **replicable** and **reproducible** but also **reusable**.

### How to work in a reproducible way ?

Principe of the **R5** ([ReSciences](https://hal.archives-ouvertes.fr/hal-01573262))


**Rerunnable** 
* Can you re-run your program ?
* One day, one week, one month, one year (just kidding) apart ?

**Repeatable**
* Can you re-run your program and get same results ?
* Did you save everything, including random seed ?

**Replicable**
* Can someone reimplement your model and get same results ?
* Did you describe everything ?

**Reproducible**
* Can someone re-run your program and get same results ?
* Did you save the software stack ?

**Reusable**
* Can someone reuse your program using different data ?
* Is your software data-dependent ?


## Virtual environments are reproducible environments

Today, industries and research centers make massive use of virtual machines. These machines run apps under a guest operating system, which uses *virtual* hardware emulated by the host operating system of the real machine. In this article, we focus on *virtualisation*. The great interest being to be able to ignore all the attributes of the host system and to emulate another system in order to have a portable and therefore reproducible environment from one machine to another. For instance, Java works on this principle of *virtualisation* (yes. JVM stands for Java Virtual Machine). Virtual Box is one of the best known tools for making Virtual Machines.


## What is a container ?

The isolation between guest and host is excellent, but it is expensive to emulate the virtual hardware and run a complete guest operating system. Containers can be seen as a lighter variant: by exploiting more directly the lower layers of the host system (kernel), the containers provide almost as much isolation as virtual machines, at a much lower performance cost.

So, a container is a lightweight, memory-loaded virtual machine that is used to launch an application within an isolated and reproducible environment. A container is instantiated from an image. An image is a static description of a container which you can exchange with your employees and from which containers can be instantiated and executed.

## Singularity

[Singularity](https://singularity.lbl.gov/) enables users to have full control of their environment. Singularity containers can be used to package entire scientific workflows, software and libraries, and even data. This means that you don’t have to ask your cluster admin to install anything for you - you can put it in a Singularity container and run.

### Build an image

In the file below, which we will call `Singularity.myRecipe`, we start from an ubuntu docker image, on which we add the wget and build-essential packages. We also create a directory that will contain our data, in fact we can use any bash command in this bootstrap file.
```
Bootstrap:
dockerFrom: ubuntu:latest%post
apt-get update && apt-get -y install
wget build-essential
mkdir /data
```

To build the container for this recipe file, use the command build:

```
sudo singularity build example.simg Singularity.myRecipe
```

The file containing the container is `example.simg`. We created a portable virtual environment for our scientific analysis. Note that you need to have `sudo` privilege to build a container with singularity.

### Commands


To get into the container, you launch a shell inside:

```
singularity shell example.simg
```

To execute a command (for instance `ls /data`) from inside the container:

```
singularity exec example.simg ls /data
```

A tricky case as you are working on a mounted disk at `/media/disk` you need to change the path of the container too:
```
singularity --bind /media/disk:/media/disk shell example.simg
```

## Download ready-to-use container

Already built images are available on https://singularity-hub.org (check my personnal collection of containers I made [here](https://singularity-hub.org/accounts/login/?next=/collections/2878)).


For instance, you can download a container with the required software to run my metabarcoding analysis:

```
singularity pull --name ednatools.simg shub://Grelot/bioinfo_singularity_recipes:ednatools
```


## Docker

Docker can package an application and its dependencies in a virtual container that can run on any Linux server. This enables the application to run in a variety of locations, such as on-premises, in a public cloud, and/or in a private cloud.

### Build an image


Docker creates a container from a configuration file named `Dockerfile` or recipe in the `workdir` directory. Let's build an image for apache.

```
FROM debian:stable
MAINTAINER vdahmane@gmail.com
RUN apt-get update && apt-get upgrade -y && apt-get install -y apache2 telnet elinks openssh-server
ENV VARIABLE ma-variable
EXPOSE  80
EXPOSE 22
CMD ["/usr/sbin/apache2ctl","-D","FOREGROUND"]
```

To build the container for this recipe file, use the command build:

```
docker build -t mycontainer workdir
```

Now you can run apache using the container:
```
docker run -d -P 9999:80 --name=Debianapache mycontainer:latest
```



### Commands


Execute a command from whithin the container:

```
docker exec -d mycontainer echo "hello"
```

Interactive shell from the container:

```
docker exec -it mycontainer bash
```

### Download ready-to-use docker container


To download a particular image, or set of images (*i.e.*, a repository), use `docker pull`. If no tag is provided, Docker Engine uses the `:latest` tag as a default. This command pulls the `debian:jessie` image:

```
docker pull debian:jessie
```

Check your images on docker

```
docker image ls
```


## Docker vs. Singularity for data processing

Singularity is a container runtime, like Docker, but it starts from a very different place. It favors integration rather than isolation, while still preserving security restrictions on the container, and providing reproducible images.


* Singularity requires `sudo` privileges to build an image of container.

* Singularity has its own image format, but it can also load images from Docker registries.

* Docker images are stored off in the local image cache, and you are expected to interact with them using the `docker image` command. In contrast, Singularity images are just normal files on your filesystem that you can move and execute as you want.

* Docker has a bigger ecosystem than Singularity: it has Mac and Windows integration, lots and lots of tools support it. Singularity is a less popular tool, with for example beta Mac support but no Windows support at the moment.

* However Docker (such as Windows and Mac) is a private corporation product while Singularity is a libre software. So even if Docker is distributed as a freeware with few restrictions, it may change over time. So if you are working for a public research lab it is better to favor a libre solution. Taxpayers' money should not be used to serve private interests when an equivalent solution is available for free.