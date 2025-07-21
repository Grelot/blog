+++
template = "page.html"
title = "Disk management on Linux"
date =  2017-07-27
draft = false
description="Commands such as checking, adding or removing storage devices, creating and deleting partitions."
[taxonomies]
tags = ["tech"]
+++

In this article, I resume some bash commands to check up or manage partitions on a linux system. The commands would check what partitions there are on each disk and other details like the total size, used up space and file system etc.
<!-- more -->



## List block devices lsblk

`lsblk` lists the different partitions and block devices in the system with their ids. The  command  prints all block devices (except RAM disks) in a tree-like format.

```
lsblk
```

## Mount a disk

We have to create a directory which will be the mount point for the device. The command `mount` mounts the device to the mount point.

```
sudo mkdir /{your directory name here}
sudo mount /dev/{specific device id} /{your directory name here that is already created}
```

## unmount a disk

`umount` command unmounts any mounted filesystem on your system. It requires disk name or mount point name to unmount currently mounted disk.

```
sudo umount /dev/sdb
```

## Permanently mount a disk


Set the system so that your devices will be automatically mounted. All information about device, format and mountpoint can be checked on `/etc/fstab`

```
cat /etc/fstab
```

To add a new drive to the mounted devices, edit `/etc/fstab`

```
sudo vi /etc/fstab
```
This file is a table of 6 columns, each row describes a mounted devices.

1. **Device** specifies the mount device. These are usually device filenames. Most distributions now specify partitions by their labels or UUIDs.
2. **Mount point** specifies the mount point, the directory where the partition or disk will be mounted. This should usually be an empty directory in another file system.
3. **File system type** specifies the file system type *i.e.* ext4
4. **Options** specifies the mount options. Most file systems support several mount options, which modify how the kernel treats the file system. You may specify multiple mount options, separated by commas.
5. **Backup operation** contains a 1 if `dump` should back up a partition or a 0 if it shouldn’t. If you never use `dump` you can ignore this option.
6. **File system check order** specifies the order in which `fsck` checks the device/partition for errors at boot time. A 0 means that fsck should not check a file system. Higher numbers represent the check order. The root partition should have a value of 1 , and all others that need to be checked should have a value of 2.

Once, fstab is filled, we have to test it.

```
sudo mount -a
```

If this command works, then we can reboot the system. By experience, errors returned by `mount` is often due to a bad file system type.


```
sudo reboot
```

## References

> **Learning the bash Shell: Unix Shell Programming**
>
> *Cameron Newham and Bill Rosenblatt*
>
> O'Reilly Media, 2005. ISBN‑13: [978-0596009656](https://openlibrary.org/isbn/978-0596009656)