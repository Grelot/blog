+++
template = "page.html"
title = "Une petite introduction au BASH (Born Again Shell)"
date =  2018-23-01
draft = false
tags = ["tech", "computer"]
+++

Le **shell** ou terminal est un interpréteur de ligne de commande.

Une **commande** est un ensemble d’instructions ou tâches données à l’ordinateur.

l'intérêt de travailler en ligne de commande plutôt qu’en interface graphique est de pouvoir **automatiser** une tâche ou un ensemble de tâches complexes.

#Fichiers, répertoires, liens symboliques

Le **fichier** ou plus exactement le nom du fichier est un pointeur. Un pointeur va indiquer à la machine la position exacte sur le disque dur où la lecture du fichier peut se faire.

Il est possible de lire, écrire ou exécuter un fichier. Pour pouvoir faire ces actions, il faut absolument donner le pointeur c’est-à-dire le nom du fichier.

Le **répertoire** est aussi un pointeur mais qui pointe non pas sur un fichier mais sur une liste d’autres pointeurs. Un répertoire “contient” (plus exactement “pointe vers”) des fichiers (plus exactement “des noms de fichiers”). Comme le répertoire est aussi un pointeur, un répertoire peut contenir d’autres répertoires.

Les **liens symboliques** sont des pointeurs qui pointe vers d’autres pointeurs (répertoire ou fichier). Pour faire simple, ce sont des copies de pointeurs. Utiliser un lien symbolique revient à utiliser le nom du fichier/répertoire vers lequel il pointe.
Se déplacer dans l’arborescence des fichiers.

#Se déplacer dans l’arborescence des fichiers.

##Change Directory cd

Permet d’aller à l’intérieur d’un répertoire. 

###Commandes

Se rendre au répertoire `root`. (c’est le répertoire parent ultime)
```
cd /
```

Se rendre au répertoire `home`. (le répertoire dédié à l’utilisateur)
```
cd ~
```
OU
```
cd /user/home
```
Se rendre au répertoire courant (cette commande est inutile car vous êtes déjà dans le répertoire courant)
```
cd .
```
Se rendre au répertoire parent. (très utile)
```
cd ..
```
Se rendre au répertoire `mon_dossier` dans le répertoire courant.
```
cd mon_dossier
```
Se rendre au répertoire `mon_dossier_dans_le_dossier` qui est dans le répertoire `mon_dossier`

```
## en deux commandes
cd mon_dossier
cd mon_dossier_dans_le_dossier
## en une seule commande
cd mon_dossier/mon_dossier_dans_le_dossier
```

###Notion de chemin relatif et de chemin absolu.

* Le chemin absolu part de `root`, exemple : `cd /vers/mon/fichier_a_atteindre`
* Le chemin relatif part du répertoire courant, exemple, si je suis dans `/vers/mon`, je peux écrire : `cd ./mon/fichier_a_atteindre`

Souvent quand on débute sur le shell (et même après), la plupart des erreurs viennent du fait qu’on a mal indiqué le répertoire où aller. (utiliser le chemin relatif est moins rébarbatif mais plus périlleux)  

Quand vous entrez des chemins vers un fichier, ne pas hésiter à utiliser l’auto-complétion avec la touche `TAB`.  

#Print name of Working Directory pwd

permet de connaître le chemin absolu(c’est-à-dire en partant de `root`) du répertoire dans lequel je me trouve.
###Commande

```
pwd
```
###Output

```
/le_repertoire/ou_je_me/trouve/
```
je me trouve actuellement dans le répertoire `/le_repertoire/ou_je_me/trouve/`

#List ls

permet d’afficher la liste des noms de tous les fichiers et répertoires présents dans le répertoire désigné. (par défaut le répertoire courant)  

###Commande
```
ls
```
###Output

```
fichier_dans_le_repertoire_courant
```

###Pour lister les fichiers/repertoires dans le repertoire courant
```
ls mon_dossier
```
###Output

```
fichier_dans_mon_dossier
```

###Pour lister les fichiers/répertoires dans le répertoire `mon_dossier`
```
ls -l mon_dossier
```
###Output

```
-rw-rw-r-- 1 peguerin teamBI 697 janv. 23 11:09 fichier_dans_mon_dossier
 ```
 
l’option `-l` permet d’afficher le détail des fichiers dans le répertoire `mon_dossier`.  
`-rw-rw-r--`  
Le premier caractère indique si il s’agit d’un repertoire/fichier/lien
* `r` signifie droit de lecture du fichier
* `w` signifie droit d’écriture du fichier (plus exactement droit de supprimer le fichier)
* `x` signifie droit d'exécution du fichier (seulement pour les programmes exécutables)
signifie que le droit n’est pas accordé
Il y a 3 series de 3 caracteres chacune indicant l’absence ou la présence du droit de lecture, écriture, execution pour respectivement, l’utilisateur propriétaire du fichier, le groupe propriétaire du fichier et l’invité.  

Par exemple ici mon fichier `fichier_dans_mon_dossier` peut-être lu et écrit mais pas executé par l’utilisateur `peguerin`, il peut être lu et écrit par les membres du groupe `teamBI` et les invités peuvent lire ce fichier. Ce fichier a une taille 697bytes, a été créer le 23 janvier à 11:09.

#Commandes utiles

## Manual man
Affiche le manuel d’utilisation d’une fonction, d’un programme du shell

###Commmande
```
man ls
```
* Afficher le manuel du programme List `ls`
* taper “q” pour quitter le manuel
* Se déplacer avec flèche directionnelle et pagination de haut en bas et bas en haut.

## head

Afficher les 15 premières lignes d’un fichier
###Commande
```
head mon_fichier
```
Afficher les 15 premières lignes de mon_fichier sur le shell

## tail

Afficher les 15 dernières lignes d’un fichier
###Commande
```
tail mon_fichier
```
Afficher les 15 dernières lignes de mon_fichier sur le shell


## File viewing more

Afficher le contenu d’un fichier dans le shell. `more` est très basique.
### Commande
```
more mon_fichier
```
Afficher le contenu de mon_fichier sur le shell

## Advanced file viewing less

Afficher le contenu d’un fichier dans le shell mais sur une session (un peu comme si vous ouvriez word.
### Commande
```
less mon_fichier
```
Afficher le contenu de mon_fichier dans une session du shell

* Taper “G majuscule” pour aller à la fin du fichier
* Taper “deux fois g minuscule” pour aller au début du fichier
* Utiliser les flèches directionnelles ou pages précédentes/suivantes pour défiler plus vite de bas en haut ou de haut en bas
* Taper “/” et un mot pour chercher ce mot dans le fichier, taper “n” (next) pour chercher le mot suivant dans le fichier.
* Finalement taper “q” pour quitter la session, vous reviendrez au shell tel que vous l’avez laissé après avoir taper la commande less.

##Text editor vi

Permet de lire et d’éditer un fichier comme si vous utilisez le bloc note de windows (mais avec énormément d’options supplémentaires)
Il existe beaucoup de text editor sur linux : le plus connu est vi (vim étant la version améliorée) et le deuxième plus connu est nano.
###Commande

```
vi mon_fichier
```
Afficher le contenu de mon_fichier dans une session vi. Par défaut vi ne vous permet que de lire le fichier.
* Taper `i` pour passer en mode insertion. Le mode insertion vous permet de modifier le texte.
* Taper `echap` pour quitter le mode insertion. (il existe d’autres modes mais seul celui-ci nous intéresse, `vi` est un outil très très riche et je ne vous présente que quelques commandes de base)
* En mode insertion, `vi` se comporte comme n’importe quel éditeur de texte.
Vous devez quitter le mode insertion pour réaliser des commandes qui ne sont pas de l’écriture de texte.
* En dehors du mode insertion :
	* Pour quitter taper `:q`, pour quitter en force (si ça bug) taper `:q!`
	* Pour sauvegarder taper `:w` en force taper `:w!`
	* pour sauvegarder et quitter taper `:wq` en force taper `:wq!`
	* Pour supprimer une ligne entière taper deux fois `d`
	* Pour annuler l'opération précédente (undo) taper `u`
	* Pour rétablir l'opération suivante (redo) taper `controle` + `R`
	* Les commandes décrites dans `less` marche aussi sur `vi`

Note : si `mon_fichier` n’existe pas au moment où vous entrer la commande, le fichier `mon_fichier` sera alors créer

##echo

Cette commande est vraiment pratique associée à d’autres commandes parce qu’elle retourne son input en une ligne de texte interprétable dans le shell. Toute seule, elle est plutôt inutile

###Commande

Retourne la chaine de caractere “coucou” en une chaine de caractere sur le shell
```
echo “coucou”
```
###Output
```
coucou
```

###Autre exemple

Retourne le nom du fichier en une chaine de caractère du nom du fichier sur le shell.
```
echo mon_fichier
```
### Output
```
mon_fichier
```


##Concatenate cat

Permet de concaténer des fichiers ensemble
###Commande
affiche le contenu du fichier dans le terminal

```
cat mon_fichier
```
### Concatener deux fichiers ensemble

Affiche le contenu de mon_fichier1 et mon_fichier2 fusionné dans le terminal

```
cat mon_fichier1 mon_fichier2
```

Affiche le contenu de mon_fichier2 et mon_fichier1 fusionné dans le terminal

```
cat mon_fichier2 mon_fichier1
```

## Word Count wc
Permet de compter le nombre de mots dans un fichier/input


###Commande
```
wc mon_fichier
```
###Output
```
1    2    3 mon_fichier
```
le nombre de ligne, le nombre de mots et le nombre de caracteres dans mon_fichier.
Ici il y a une ligne, deux mots et 3 caracteres(1 mot avec 1 caractere et l’autre avec 2 caracteres.

### Compter les lignes dans un fichier

L’option `-l` donne uniquement le nombre de lignes.
```
wc -l mon_fichier
```
###Output
Il y a une seule ligne dans `mon_fichier`
```
1
```

### Compter les mots dans un fichier

L’option `-w` donne uniquement le nombre de mots.
```
wc -w mon_fichier
```
###Output
```
2
```

### Compter les caractères dans un fichier

L’option `-c` donne uniquement le nombre de caracteres.

```
wc -c mon_fichier
```
###Output
```
3
```

#Combiner les commandes
La plupart des programmes LINUX sont conçus selon le principe “faire une seule chose mais le faire très bien”. Par exemple `ls` affiche la liste des fichiers dans un répertoire et `wc` permet de compter combien il y a d’éléments dans une entrée.

Il faut comprendre un programme basiquement comme cela :

```
input(entree) → programme → output(sortie)
```

* Un programme traite un input (texte, nom de fichier, etc) et retourne un output (résultat) sous la forme de texte, fichier, etc.

* La force du shell c’est de pouvoir donner l’output d’un programme en input à un autre et ainsi de les combiner.

###Par exemple :
```
ls .
```
ouput :
```
fichier1, fichier2, fichier3
```
Cette commande affiche les noms des 3 fichiers dans mon repertoire courant

#####Maintenant essayons de combiner ce programme à un autre en utilisant le pipe `|`
```
ls . | wc -w
```
ouput :
```
3
```

* En branchant la sortie de `ls` sur l'entrée de `wc` grâce au pipe `|`, j’ai créer une nouvelle fonction : je peux compter le nombre de fichier dans mon repertoire courant.

* La sortie de `ls` était une liste de 3 mots. `wc -w` a compté le nombre de mots dans la sortie de `ls` et a retourné le compte de mots i.e. de fichiers.

* En branchant les programmes entre eux, il est possible de créer de nouvelles fonctions.

* Le **pipe** `|` permet de brancher la sortie d’un programme sur l’entrée d’un autre programme. Un **pipeline** en informatique c’est simplement une chaîne d’instructions reliées par des **pipes**.

* Pour écrire la sortie “en dur” d’un programme (car à la fin on voudrait quand même avoir nos résultats écrits dans un fichier) il faut utiliser `>`
(attention toutefois, certains programmes génèrent par défaut des fichiers et alors le `>` n’est pas nécessaire)

:pushpin: note : le `;` permet de différencier deux lignes de commandes. Vous pouvez utiliser le saut à la ligne ou le “;” indifféremment.

#####Par exemple
```
echo “coucou” > coucou.txt ; more coucou.txt
```
output : 
```
coucou
```

J’ai écrit la sortie de `echo` dans le fichier nommé `coucou.txt`. J’ai ensuite afficher le contenu de `coucou.txt` avec `more`. Je vois alors ce que j’avais écrit pour `echo` écrit dans ce fichier.

#####Suite de l’exemple
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

* J’ai affiché le contenu du fichier `coucou.txt` et brancher sa sortie sur `wc -c` qui a retourné le nombre de caractere dans le fichier `coucou.txt`. Ce résultat a été écrit dans le fichier `nombre_carac_coucou.txt`.
* J’ai ensuite concatener avec `cat`, `coucou.txt` et `nombre_carac_coucou.txt` et écrit la sortie de `cat` dans le fichier `coucou_nombre.txt`. Je lis ce fichier `coucou_nombre.txt` avec `more`. Ce fichier contient le contenu du fichier `coucou.txt` et le contenu du fichier `coucou_nombre.txt`, eux même résultat des opérations précédentes.

:pushpin: note : Pourquoi 7 caractères pour “coucou” qui en compte en réalité 6 ? 
Hé bien parce que le programme a aussi compté le saut à la ligne comme un caractère. En effet j’ai écrit “coucou” mais j’ai donné la sortie de `echo` et `echo` par défaut ajoute un saut de ligne (c’est plus propre). Donc `echo` a envoyé à `wc` la chaîne de caractères : `coucou\n` (`\n` retour chariot, le caractère saut à la ligne)
Si vous êtes perfectionniste ajouter l’option `-n` à `echo` soit la commande:
```
echo -n "coucou" | wc -c
```
Alors `echo` n’ajoutera pas de saut de ligne et `wc -c` comptera 6 caractères. 
Cet exemple pour vous dire de rester vigilant sur vos résultats, et le comportement de vos programmes, prenez le temps de bien les comprendre pour choisir le programme le plus approprié à ce que vous voulez faire.





