+++
template = "page.html"
title = "Linux System Administration Basics"
date =  2017-04-24
draft = false
description="Here a collection of basic but useful commands to admin a linux system."
[taxonomies]
tags = ["sys"]
+++

Since Linux is a multi-user operating system, several people may be logged in and actively working on a given machine at the same time. Security-wise, it is never a good idea to allow users to share the credentials of the same account. In fact, best practices dictate the use of as many user accounts as people needing access to the machine.
 <!-- more -->
At the same time, it is to be expected that two or more users may need to share access to certain system resources, such as directories and files. User and group management in Linux allows us to accomplish both objectives.



## Add new users

It creates an user `thisuser` belonging to the group `thisgroup` and using `/bin/bash` as default shell. By default on ubuntu it's `/bin/sh`.
```
useradd -G thisgroup -s /bin/bash thisuser
```
Modify the password of an user named `thisuser`
```
passwd thisuser
```
Check password of `thisuser` on the user list
```
grep thisuser /etc/passwd
```
Modify the default shell of an user named `thisuser`
```
chsh -s /bin/bash thisuser
```
It displays the list of all users on the system
```
awk -F':' '{ print $1}' /etc/passwd
```


## Add new groups to an user

It creates a group `thisgroup`
```
groupadd thisgroup
```
It defines `premiergroup` as the primary group of user `thisuser` 
```
usermod -g premiergroup thisuser 
```
It defines `secondgroup` as a supplementary group of user `thisuser`
```
usermod -a -G secondgroup thisuser
```
It displays members of the group `thisgroup`
```
getent group thisgroup
```
It displays the list of all groups on the system
```
cut -d: -f1 /etc/group | sort
```

## Grant sudo privileges to an user

It adds the user `thisuser` to the `sudo` group. Members of this group can execute any command as *root* via `sudo` and prompted to authenticate themselves with their password when using `sudo`
```
usermod -a -G sudo thisuser
```

## delete Users and groups

It deletes an user called `thisuser`
```
deluser thisuser
```
It delete a group called `thisgroup`
```
groupdel thisgroup
```

## References

> **Learning the bash Shell: Unix Shell Programming**
>
> *Cameron Newham and Bill Rosenblatt*
>
> O'Reilly Media, 1995. ISBN‑13: [978-0596009656](https://openlibrary.org/isbn/978-0596009656)