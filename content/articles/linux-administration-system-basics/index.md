+++
template = "page.html"
title = "Linux System Administration Basics"
date =  2018-03-24
draft = false
tags = ["tech", "computer"]
+++

Here a collection of basic but useful commands to admin a linux system.

_______________________________________________________________________________


# Managing users and groups

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

