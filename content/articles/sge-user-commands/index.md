+++
template = "page.html"
title = "SGE user commands"
date =  2017-09-17
draft = false
tags = ["SGE", "cluster", "tech"]
lang = "en"
+++


## Sun Grid Engine

Cluster environment such as [MBB](https://mbb.univ-montp2.fr/MBB/index.php) is similar unix/linux environments for your job submission (e.g. running your scripts or other software). The difference is that you need to specify needed resources beforehand. The cluster is controlled by a **SGE** (**S**un **G**rid **E**ngine software) that orders the queues and resources. This sort of scheduling system is necessary when limited computational resources are shared by many.

SGE will do the *job scheduling*. That means you can submit all your jobs and SGE will queue them and run them when resources you requested becomes available. SGE will also achieve *load balancing* where the jobs will be distributed so that specific nodes do not get overloaded. In addition, SGE will allow you to do *job monitoring* which will be useful when you want to check if your job is running ,and if it failed it will help you understand what went wrong.


## Access and use the cluster

The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption.

To access to a cluster, you need your administrator creates your account first. Then you can acces via SSH.

```
ssh <yourUserName>@<clusterAdress>
```

## Command to submit a job

Here an example of bash script `submitBatchJob.sh` to submit a batch job via SGE:

```
# Job name
#$ -N myjob_20190903-110055
# Using current working directory (otherwise, you will have to use '#$ wd /path/to/run')
#$ -cwd
# job time limits (h_rt is required [s_rt == software time limit / h_rt == hardware time limit])
#$ -l s_rt=999:55:00
#$ -l h_rt=920:00:00
# choose to run on a specific queue
#$ -q cemeb20.q
# Get a mail when the job begins, ends or is suspended
#$ -m ebs
#$ -M me@mail.com
# Redirects the standard output to the named file.
#$ -o submitjob_sge_cluster/qsub_outputs/myjob_20190903-110055.out
##$ -e submitjob_sge_cluster/qsub_outputs/myjob_20190903-110055.err
# merge standard and error outputs
#$ -j yes
# choose a parallel environment and run on 60 slots (use $PE_HOSTFILE)
# -pe mpi 16
# Export all my environment variables into job runtime context
#$ -V
################### job to submit #############################################
bash myjob.sh
```
- The job to run into a Grid Engine queue is the the non-commentary line.

- Lines starting with `#$` are dedicated to `qsub`'s parameters:

    * `-N` defines the name of the job
    * `-q` defines cluster queues which may be used to execute this job.
    * `-l` launches the job in a Grid Engine queue meeting the given resource request list
    * `-m` defines or redefines under which circumstances mail is to be sent. The option arguments have the following  meaning:
        - `b` Mail is sent at the beginning of the job.
        - `e` Mail is sent at the end of the job.
        - `a` Mail is sent when the job is aborted.
        - `s` Mail is sent when the job is suspended.
    * `-M` defines the list of users to which the server that executes the job has to send mail
    * `-o` defines the path used for the standard output stream of the job
    * `-e` defines the path used for the standard error stream of the job
    * `-j` specifies *yes* or *no* whether or not the standard error stream of the job is merged into the standard output stream.
    * `-pe` parallel programming environment (PE) to instantiate.
    * `-V` exports all environment variables into job runtime context

To submit the job with these parameters, simply use the `qsub` command:

```
qsub submitBatchJob.sh
```



## Command to submit a job


#(qconf -sql (to list queues) qconf -sq queue_name (to print informations on this queue))
#