+++
template = "page.html"
title = "A little introduction to BASH (Born Again Shell)"
date =  2018-01-23
draft = false
tags = ["tech", "computer"]
+++

So far, this article is yet not available in english.



The **shell** or terminal is a command line interpreter.

A **command** is a set of instructions or computer tasks.

The interest to work with command line instead of an user graphical interface is to automate a computer task or a complex set of tasks.


# Files, directories, symbolic links

The **file** or more accurately the name of the file is a pointer. A pointer stores memory address on the hard drive from where the file can be read.

It is possible to read, write or execute a file. To do these actions, you need to provide the pointer *i.e.* the name of the file.

The **directory** is also a pointer but not pointing at a file. Actually the directory point at a list of other pointers. A directory "contains" (more accurately "point at") files (more accurately "names of files"). As a directory is also a pointer, a directory can contain others directories.

**Symbolic links** are pointers which are pointing at other pointers. Broadly, they are copies of pointers. To use a symbolic link remains the same as using the name of a file/directory at which it points.


# Browse files and directories

## Change Directory cd

To change the current working directory to a specified one.

### Commandes

Switch to the directory `root`. (This is the last parent directory)

```
cd /
```

Switch to the directory `home`. (This is the directory reserved for the user)
```
cd ~
```
OU
```
cd /home/user
```
Switch to the current working directory (This command is useless because you are already working on this directory)
```
cd .
```
Switch to the parent directory. (very useful)
```
cd ..
```
Switch you to the previous directory
```
cd -
```
Put you in a subdirectory called `mon_dossier`.
```
cd mon_dossier
```
Switch to the sub-subdirectory called `mon_dossier_dans_le_dossier` which is in the subdirectory called `mon_dossier`.

```
## 2 commands
cd mon_dossier
cd mon_dossier_dans_le_dossier
## single command
cd mon_dossier/mon_dossier_dans_le_dossier
```