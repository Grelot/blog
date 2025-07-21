+++
template = "page.html"
title = "A little introduction to BASH (Born Again SHell)"
date =  2016-03-23
draft = false
in_search_index = true
description = "A quick introduction to the very basics starting from the UNIX operating system."
[taxonomies]
tags = ["tech"]
+++

This is some hints about shell script programming based on examples. I provide here some little scripts which will hopefully help to understand the very basics. 
<!-- more -->

The **shell** or terminal is a command line interpreter.

A **command** is a set of instructions or computer tasks.

The interest to work with command line instead of an user graphical interface is to automate a computer task or a complex set of tasks.


## Files, directories, symbolic links

The **file** or more accurately the name of the file is a pointer. A pointer stores memory address on the hard drive from where the file can be read.

It is possible to read, write or execute a file. To do these actions, you need to provide the pointer *i.e.* the name of the file.

The **directory** is also a pointer but not pointing at a file. Actually the directory point at a list of other pointers. A directory "contains" (more accurately "point at") files (more accurately "names of files"). As a directory is also a pointer, a directory can contain others directories.

**Symbolic links** are pointers which are pointing at other pointers. Broadly, they are copies of pointers. To use a symbolic link remains the same as using the name of a file/directory at which it points.


## Browse files and directories

### Change Directory cd

To change the current working directory to a specified one.


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


### Concept of absolute path and relative path

* The absolute path starts from `root`, *e.g.* `cd /path/to/my/file`
* The reslative path start from current working directory, *e.g.* I am at `/path/to`, i can write: `cd ./my/file`

Frequently, one begin to use the shell (and even after), most of errors comes from wrong path. (using the relative path is less daunting but more perilous.)  

When you type path to a file, speeds up it by using autocompletion with the keypad `TAB`.


### Print name of Working Directory pwd

To give you the absolute path(*i.e.* the path from `root`) of current working directory.


command:
```
pwd
```
output:
```
/the/directory/where/i/am
```
I'm currently working into the directory  `/the/directory/where/i/am`


## List ls

To give you the list of names of files and directories which are located into the designated directory. (by default, the designated directory is your current working directory)

Command for listing files, directories or links into current directory
```
ls
```
output:
```
file_into_my_current_dir.txt
```

To list files, directories or links into directory called `my_dir`
```
ls my_dir
```
output:

```
file_into_my_dir.txt
```

To display long format list of `my_dir` content
```
ls -l my_dir
```
output:

```
-rwxrw-r-- 1 user teamBI 697 jan. 23 11:09 file_into_my_dir.txt
 ```
 
`-l` option displays details of files located into the directory called `my_dir`.    
`-rwxrw-r--`  
`-` `rwx` `rw-` `r--`  

* The first character indicates if it's a file (`-`) or a directory (`d`) or a link (`l`)
* `r` means right to read this file
* `w` means right to write this file (modify or delete)
* `x` means right to execute this file
* `-` means no right
They are 3 triplets of characters. Each character indicates if right to read/write/execute is granted or not for respectively the owner-user of this file (first triplet), the owner-group of this file (second triplet) and a foreigner (last triplet).  

For instance here, my file(`-`) `file_into_my_dir.txt` can be read and written and executed by the user `user` (first triplet: `rwx`) who is the owner of this file. People who belongs to the group `teamBI` can also read and write but no execute this file (second triplet: `rw-`) and foreigners can only read the file (last triplet: `r--`). This file size is 697 bytes. This file was created january the 23th at 11:09.


## Some useful commands

### Manual man
Print the manual of a shell program
```
man ls
```
* Print manual of the program List `ls`.
* type keypad `q` to quit manual session.
* Browse the manual using directional keys and up/down pagination arrows keys.

### head

Print the first 15 rows of a file.


```
head mon_fichier
```
Will print the first 15 rows of the file `mon_fichier` into the shell.

### tail

Print the last 15 rows of a file.


```
tail mon_fichier
```
Will print the last 15 rows of the file `mon_fichier` into the shell.


### File viewing more

To view the content of a file into the shell. `more` is especially primitive.



```
more mon_fichier
```
Will show the content of `mon_fichier` into the shell.

### Advanced file viewing less


Display the content of a file into a session with more features than `more`.


```
less mon_fichier
```

Will show the content of `mon_fichier` into an instance.

* Type `G` to go to the end of the file.
* Type twice `g` to got at the beginning of the file.
* Use arrows keys to browse the file upward or downward.
* Type `/` and a word or an expression to seek it. Type `n` (next) to seek the next occurence of this expression into the file.
* Finally, type `q` to exit the current `less` session.

### Text editor vi

To read, write and edit a file a bit like a notepad in windows. They are a lot of text editor under LINUX: my favorite is `vi` (`vim` is the improved version), `nano` is also very popular.


```
vi mon_fichier
```

Will load a text editor session to edit `mon_fichier`. By default, `vi` only allow you to read a file.

* Type `i` to activate the insert mode edition. In this mode, you can modify the text.
* Type `esc` to exit the insert mode. (They are other modes into `vi` but I will focus only on insert mode this time. `vi` is actually very rich in options and I show here only basic commands.)
* In insert mode, `vi` behaviour is like an editor text.

You must exit insert mode to execute commands which are not text typing.

* Outside insert mode :
	* To exit the programn type `:q`, to force to exit, type `:q!`
	* To save `:w`, to force to save `:w!`
	* To save and exit `:wq` to force to save and exit `:wq!`
	* To delete a whole row, type *twice* `d`
	* To undo, type `u`
	* To redo, type `ctrl` + `R`
	* Commands described in `less` also works in `vi`

Note : if `mon_fichier` don't exist at the moment I enter the command, then `vi` will create this file.

### echo

This command is useful associated with other commands because it returns its input as a text which can be interpreted by the shell.



To return a shell string "coucou".

```
echo “coucou”
```
output:
```
coucou
```


To return the name of a file `mon_fichier` as a string.

```
echo mon_fichier
```
output:
```
mon_fichier
```


### Concatenate cat

To concatenate files together.


```
cat mon_fichier
```
Will show content of `mon_fichier` into the shell.


### Concatenate 2 files together

Merge and print contents of `mon_fichier1` and `mon_fichier2` into the shell.


```
cat mon_fichier1 mon_fichier2
```

Merge and print contents of `mon_fichier2` and `mon_fichier1` into the shell.

```
cat mon_fichier2 mon_fichier1
```

### Word Count wc

Print number of words into a file.



```
wc mon_fichier
```
Output:
```
1    2    3 mon_fichier
```

Will print the number of rows (newline), number of words and number of characters for the file `mon_fichier`. Here, `mon_fichier` counts 1 row, 2 words and 3 characters. (a first word with 1 character and a second word with 2 characters.)

### Count lines for a file

The option `-l` print only the newline counts.
```
wc -l mon_fichier
```

The `mon_fichier` counts only one line.
```
1
```

### Count words for a file

The option `-w` print only the word counts.
```
wc -w mon_fichier
```
Output:
```
2
```

### Count characters for a file

The option `-c` print only character counts.

```
wc -c mon_fichier
```
Output:
```
3
```


### Combine commands together

Most of LINUX programs are designed under the principle "Do one thing and do it well". For instance, `ls` print list of files into a directory and `wc` counts number of newlines or words for an input.  


We can resume a program as something as basic as:

```
input --> program --> output
```

* A program proceed an input (text, files, etc.) and return an output (result) as a text, files, etc.
* Power of shell is to give the output of a program as the input of another program and thus to combine both programs together.

For instance:
```
ls .
```
ouput:
```
fichier1 fichier2 fichier3
```
This command prints a list of 3 files into my current working directory.


## The Pipe

Now let's combine 2 programs together using `|`
```
ls . | wc -w
```
ouput:
```
3
```

* By redirecting the output of `ls` on the input of `wc` using `|`, I create a new function: to count the number of files for my current working directory.

* Output of `ls .` was a list of 3 words `fichier1 fichier2 fichier3`. `wc -w` prints word counts of the output of `ls .`. It returns the word counts *i.e.* file counts.

* By redirecting output of programs to input of other programs, we can create new functions.

* The **pipe** `|` redirect output of a command to the input of the next command. A **pipeline** in informatics is simply a chain of redirected instructions by **pipes**.

* To write the output of a command (because we want our results written in a file) you have to use `>`. (By the way, some programs already write their output directly into a file )



note: `;` set the end of a command. You can use indifferently newlines or `;`.

For example:
```
echo “coucou” > coucou.txt ; more coucou.txt
```
output: 
```
coucou
```
I wrote the output of `echo` inside a file called `coucou.txt`. Next, I print the content of this file `coucou.txt` with `more`.


### Last example of combination of commands


```
cat coucou.txt | wc -c > nombre_carac_coucou.txt
cat coucou.txt nombre_carac_coucou.txt > coucou_nombre.txt
more coucou.txt
```
output : 
```
coucou
```
```
more nombre_carac_coucou.txt
```
output : 
```
7
```
```
more coucou_nombre.txt
```
output : 
```
coucou
7
```


* I printed the content of `coucou.txt` and redirect his output to the input of `wc -c` which return the character counts for this file `coucou.txt`. This result has been written in the file `nombre_carac_coucou.txt`
* Next, I concatenate `coucou.txt` and `nombre_carac_coucou.txt` using `cat` and written output of `cat` in the file `coucou_nombre.txt`. I read the file `coucou_nombre.txt` with `more`. This file contains a merge of contents of `coucou.txt` and `coucou_nombre.txt`.

Note: why 7 characters for "coucou" which actually counts 6 characters ?
Well, it is because the program also counted the jumpline as a character. Indeed, I wrote "coucou" but i redirected the output of `echo` and `echo` added a new line (it's nicer). So, `echo` sent to `wc` the character string `coucou\n` (with `\n` the jumpline character).  

If you are a perfectionnist, add the option `-n` to `echo`:

```
echo -n "coucou" | wc -c
```
Thus, `echo` will not add a jumpline and `wc -c` will count 6 characters.  


This is an example to tell you to remain vigilant about your results, and the behavior of your programs. Take the time to understand them well in order to pick the most appropriate program for what you want to do.


## References

> **Learning the bash Shell: Unix Shell Programming**
>
> *Cameron Newham and Bill Rosenblatt*
>
> O'Reilly Media, 2005. ISBN‑13: [978-0596009656](https://openlibrary.org/isbn/978-0596009656)


