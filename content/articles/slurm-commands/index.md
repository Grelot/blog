+++
template = "page.html"
title = "SLURM User Commands"
date =  2021-05-30
draft = false
description = "How to use SLURM and queueing system. Submit batch jobs."
[taxonomies]
tags = ["sys"]
+++



[Nextflow](/articles/nextflow-reproducible-scalable-workflow)


High Computing Performance (HPC) using computer clusters requires a workload manager. A workload manager is a queuing system for job execution in a shared environment. It runs the allocated resources (memory, CPU, GPU) for the specified job when the resources are available without disturbing other running or planned jobs.
<!-- more -->

Previously I was using [Sun Grid Engine](/articles/sge-user-commands) as a workload manager. Now I am using [SLURM](https://slurm.schedmd.com/quickstart.html). Here I present the most useful commands to submit and monitor jobs on computer clusters.

## SLURM

**SLURM** or the **S**imple **L**inux **U**tility for **R**esource **M**anagement 


<center><img src="/articles/slurm-commands/slurm_components_schema.jpg" width="50%" alt="slurm_components_schema"></center>


## Access and use the cluster

The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption.

To access to a cluster, you need your administrator creates your account first. Then you can acces via SSH.

```
ssh <yourUserName>@<clusterAdress>
```





## References

* SLURM documentation [Slurm documentation](https://slurm.schedmd.com/documentation.html)