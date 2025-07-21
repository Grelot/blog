+++
template = "page.html"
title = "SGE user commands"
date =  2017-09-17
draft = false
description = "Understand SGE and queueing system. Submit batch jobs to SGE cluster."
[taxonomies]
tags = ["tech"]

+++

Using a cluster environment is similar to using linux environments for your job submission. The difference is that you need to specify needed resources beforehand. The cluster is controlled by a SGE (Sun Grid Engine Software) that organizes the queues and resources. This sort of scheduling system is necessary when limited computational resources are shared by many. Here I show how to use Sun Grid Engine for job submission, monitoring and troubleshooting.
 <!-- more -->

## Sun Grid Engine

Cluster environment such as [MBB](https://mbb.univ-montp2.fr/MBB/index.php) is similar as unix/linux environments for job submission (e.g. running your scripts or other software). The difference is that you need to specify needed resources beforehand. The cluster is controlled by a **SGE** (**S**un **G**rid **E**ngine software) that orders the queues and resources. This sort of scheduling system is necessary when limited computational resources are shared by many.

SGE will do the *job scheduling*. That means you can submit all your jobs and SGE will queue them and run them when resources you requested becomes available. SGE will also achieve *load balancing* where the jobs will be distributed so that specific nodes do not get overloaded. In addition, SGE will allow you to do *job monitoring* which will be useful when you want to check if your job is running ,and if it failed it will help you understand what went wrong.


## Access and use the cluster

The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption.

To access to a cluster, you need your administrator creates your account first. Then you can acces via SSH.

```
ssh <yourUserName>@<clusterAdress>
```

## Job scheduling: command to submit a job

Here an example of bash script `submitBatchJob.sh` to submit a batch job via SGE:

```
# Job name
#$ -N myjob_1
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



## Job monitoring: check the current status of my submitted job

You can see the current status of the available Grid Engine queues and the jobs associated with the queues with `qstat`:

```
qstat
```

It returns:


```
job-ID  prior   name       user         state submit/start at     queue                          slots ja-task-ID 
-----------------------------------------------------------------------------------------------------------------
2041601 0.53741 myjob_1    peguerin     r     09/17/2020 12:08:30 cemeb20.q@mbbnode-0-30.local       1        
2041602 0.54128 myjob_2    peguerin     qw    09/17/2017 12:07:12                                    1       
```

- job-ID: the ID number of the job, useful to kill the job
- prior: priority of the job. The higher a job's priority value, the earlier it gets dispatched.
- name: the name of the job you submitted with `qsub`
- user: the user name of the owner of the job
- state(s):
    * `q`: queued 
    * `w`: waiting
    * `s`: suspended
    * `r`: running
    * `e`: error
- submit/start at: the date the job was submitted
- queue: the name of the queue the job is using (defined with `qsub`)
- slots: the number of slot the job is taking.
- ja-task-ID -- The job array task ID

Specifies a full format display of information:

```
qstat -f
```

See jobs owned by the user `$USER`:

```
qstat | grep $USER
```

See a specific job status with a given job-ID `<job-ID>`:

```
qstat -j <job-ID>
```

To delete Grid Engine job with a given job-ID `<job-ID>` from queues:

```
qdel -j <job-ID>
```


## Queue information

This command displays a list of available queues in a cluster:

```
qconf -sql
```

This command shows the status of Grid Engine hosts, queues, jobs

```
qhost
```


To manage the queues of the system, we use `qconf`. Let's print information about the queue named `<queue>`

```
qconf -sq <queue>
```

Finally, this `qstat` command displays a cluster queue summary:

```
qstat -g c
```

It returns:


```
CLUSTER QUEUE                   CQLOAD   USED    RES  AVAIL  TOTAL aoACDS  cdsuE  
--------------------------------------------------------------------------------
cemeb.q                           0.70     64      0     39    104      8      0 
cemeb20.q                         1.17    121      0     20    176     40     48 
mbb.q                             0.00      0      0     40     40      0      0 
mem.q                             0.08      3      0     37     40      0      0 
```

* CLUSTER QUEUE: the cluster queue name.
* CQLOAD:  an average of the normalized load average of all queue hosts.
* USED: the number of currently used slots.
* RES: the number of slots reserved in advance.
* AVAIL: the number of currently available slots.
* TOTAL:  the total number of slots.
* aoACDS: the number of slots which is in at least one of the states `aoACDS`
    - `a`: Load threshold alarm
    - `o`: Orphaned
    - `A`: Suspend threshold alarm
    - `C`: Suspended by calendar
    - `D`: Disabled by calendar
* cdsuE: the number of slots which are in one of these states or in any combination of them: `cdsuE`
    - `c`: Configuration ambiguous
    - `d`: Disabled
    - `s`: suspended
    - `u`: Unknown
    - `E`: Error


## References

* Grid Engine manual pages ([Sun Grid Engine manuals](https://gridscheduler.sourceforge.net/htmlman/manuals.html))  
* Documentation related to the Montpellier Bioinformatics Biodiversity HPC cluster ([Khalid Belkhir](https://kimura.univ-montp2.fr/calcul/))
* Documentation related to the Occitanie regional datacenter ([MESO@LR](https://isdm.umontpellier.fr/))
 