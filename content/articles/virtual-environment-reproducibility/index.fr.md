+++
template = "page.html"
title = "Environnements virtuels, conteneurs et reproductibilité scientifique"
date =  2018-01-19
draft = false
tags = ["tech", "sciences"]
lang = "fr"
+++


## La nécessité de la reproductibilité en informatique

### Qu'est ce que la reproductibilité ?

La **reproductibilité** d'une preuve scientifique est la proximité des **mesures** observées sur une même **grandeur** en suivant la méthode décrite correspondante. (*e.g.* une publication et son code source approuvés par des pairs dans une revue scientifique)



### Pourquoi travailler de façon reproductible ?

En pratique, cela permet de valider les expériences scientifiques sans en garantir l’exactitude, la justesse ou la pertinence. C'est aussi utile pour tester une hypothèse et faciliter la diffusion et la publication des résultats. En ce qui concerne, le calcul numérique et les simulations, à l'exigence de **réplicabilité** et de **reproductibilité**, il faut encore ajouter la **reutilisabilité**.


### Comment travailler de façon reproductible ?

Règle des **5 R** ([ReSciences](https://hal.archives-ouvertes.fr/hal-01573262))


**Reexécutable**
* Pouvez vous exécuter à nouveau votre programme sans problème ?
* Un jour, une semaine, un mois, voire une année plus tard ?

**Répétable**
* Pouvez vous exécuter à nouveau votre programme et obtenir les même résultats ?
* Avez-vous conserver ces données, y compris la valeur du départ aléatoire pour les simulations ?

**Replicabilité**
* Est ce que quelqu'un peut réimplémenter votre simulation et obtenir les même résultats ?
* Avez-vous décrit toutes les conditions nécessaires de l'experience ?

**Reproductibilité**
* Est ce que quelqu'un d'autre peut réussir à exécuter à nouveau votre programme ?
* Avez vous sauvegarder la liste des dépendances logicielles ?

**Réutilisable**
* Est ce que quelqu'un d'autre peut réussir à exécuter votre programme mais avec des données différentes ?
* Est ce que votre programme dépend de la donnée utilisée ?


##  Les environnements virtuels sont des environnements reproductibles

Les industries et laboratoires de recherche font une usage massif des machines virtuelles. Ces machines permettent d'exécuter des applications dans un système opérateur invité qui utilise du matériel *virtuel* émulé par le système opérateur hôte de la machine réelle. Dans cet article, nous nous interressons à la *virtualisation*. L'interêt de la virtualisation est de pouvoir ignorer les caractéristiques du système opérateur hôte et d'émuler un autre système permettant ainsi d'avoir un environnement portable et donc reproductible d'une machine à une autre. Par exemple, Java fonctionne selon le principe de virtualisation (oui. JVM signifie Java Virtual Machine). Virtual Box est un des outils les plus populaires pour construire des machines virtuelles.


## Qu'est ce qu'un conteneur ?

L'isolation entre le système hôte et invité est excellente mais il est coûteux d'émuler le matériel virtuel et d'executer le système opérateur invité en entier. Les conteneurs sont une sorte de variant en plus léger : en exploitant directement les couches les plus basses du système hôte (noyau), les conteneurs fournissent une isolation presque équivalente à celle des machines virtuelles et à un coût bien moins élevé en terme de performance.

Donc, le conteneur est une machine virtuelle allégée qui est utilisée pour exécuter une application dans un environnement isolé et reproductible. Un conteneur est instancié à partir d'une image. Une image est une description statique d'un conteneur qui peut être partagé avec vos partenaires et à partir de laquelle le conteneur peut être instancié et executé. 


## Singularity

[Singularity](https://singularity.lbl.gov/) permet de contrôler des environnements virtuels. Les conteneurs de Singularity peuvent être utilisé pour empaqueter des workflows scientifiques entiers, leurs logiciels, leurs dépendances et même des données. Cela signifie que vous n'avez pas besoin de demander à un administrateur système d'installer programmes et librairies, désormais il suffit de les placer dans votre conteneur et de l'exécuter directement sur le cluster de calcul.


### Monter une image



Dans le fichier suivant, que nous appellerons `Singularity.myRecipe`, nous initialisons notre conteneur par une image de ubuntu par docker, sur laquelle nous ajoutons les paquets wget et build-essential. Nous créeons également à l'intérieur du conteneur, un dossier qui contient nos données. En fait, nous pouvons donner n'importe quel commande bash dans ce fichier bootstrap.

```
Bootstrap:
dockerFrom: ubuntu:latest%post
apt-get update && apt-get -y install
wget build-essential
mkdir /data
```


Pour monter le conteneur à partir de cette recette:

```
sudo singularity build example.simg Singularity.myRecipe
```

Le conteneur est contenu dans le fichier `example.simg`. Nous avons crée un environnement virtuel portable pour notre analyse scientifique. Il faut toutefois noter qu'il est nécessaire d'avoir les privilèges administrateur sudo pour monter un conteneur à l'aide de Singularity.


### Commandes


Pour aller dans le conteneur et lancer un terminal shell dedans :

```
singularity shell example.simg
```

Pour exécuter une commande bash (par exemple `ls /data`) depuis un conteneur :

```
singularity exec example.simg ls /data
```

Un cas un peu sioux, lorsque vous travaillez sur un disque monté sur `/media/disk`, alors il vous faut changer le chemin absolu du conteneu :
```
singularity --bind /media/disk:/media/disk shell example.simg
```


## Télécharger des conteneurs prêts à l'emploi 

Des images déjà montées sont disponibles sur le registre https://singularity-hub.org (vous pouvez admirer ma collection personnelle de conteneurs [ici](https://singularity-hub.org/accounts/login/?next=/collections/2878)).


For instance, you can download a container with the required software to run my metabarcoding analysis:

Par exemple, vous pouvez télécharger un conteneur qui contient tous les logiciels nécessaires pour des analyses en lien avec le metabarcoding :

```
singularity pull --name ednatools.simg shub://Grelot/bioinfo_singularity_recipes:ednatools
```

Executer `vsearch` depuis le conteneur:

```
singularity exec ednatools.simg vsearch --help

```

## Docker

[Docker](https://www.docker.com/) peut empaqueter des applications et leurs dépendances dans un conteneur qui peut être exécuté sur n'importe quel système linux. Cela permet à vos applications de tourner sur une grande variété de machines, tels que les plate-formes de calcul scientifique ou les cloud privés ou publiques.

### Monter une image

Docker monte un conteneur à partir d'un fichier de configuration nommé `Dockerfile` ou recette dans le dossier `workdir`. Voici comment monter une image avec l'application apache.

```
FROM debian:stable
MAINTAINER vdahmane@gmail.com
RUN apt-get update && apt-get upgrade -y && apt-get install -y apache2 telnet elinks openssh-server
ENV VARIABLE ma-variable
EXPOSE  80
EXPOSE 22
CMD ["/usr/sbin/apache2ctl","-D","FOREGROUND"]
```

La commande suivante permet de monter le conteneur de cette recette en utilisant docker :

```
docker build -t mycontainer workdir
```

A présent, nous pouvons exécuter apache depuis le conteneur :

```
docker run -d -P 9999:80 --name=Debianapache mycontainer:latest
```



### Commandes


Exécuter une commande bash (`echo "hello"`) depuis l'interieur du conteneur:

```
docker exec -d mycontainer echo "hello"
```

Shell interactif depuis le conteneur:

```
docker exec -it mycontainer bash
```


### Télécharger un conteneur prêt à l'emploi avec docker

Pour télécharger une image ou plusieurs, il faut utiliser la commande `docker pull`. Si aucune étiquette n'est fournise, Docker considère l'étiquette ayant pour valeur `:latest` par défaut. La commande suivante permet de récupérer l'image de `debian:jessie` (étiquette `jessie`) :


```
docker pull debian:jessie
```

Vérifier les images déjà chargées sur docker en local :

```
docker image ls
```

## Les différences entre Docker et Singularity


Singularity est un exécuteur de conteneur tout comme Docker mais les deux ont une approche différente. Singularity favorise l'intégration plutôt que l'isolation du système invité, tout en conservant les restrictions de sécurité dans le conteneur et tout en fournissant des images reproductibles et faciles à partager.

* Singularity nécessite des privilèges administrateurs `sudo` pour monter un conteneur.

* Singularity as son propre format d'image mais il peut tout de même charger et utiliser des images des registres Docker.

* Les images Docker sont stockées dans le cache d'images local, et l'accès aux conteneurs ne peut se faire que par la commande `docker image`. En revanche, les images de Singularity sont juste des fichiers normaux et peuvent être traité comme tel.

* Docker a un écosystème plus important que Singularity : Docker fonctionne sur Mac et Windows et pas seulement LINUX, et de nombreux projets le soutiennent. Singularity est un outil moins populaire, il fonctionne sur les distros LINUX, bien qu'il existe une version de support pour Mac mais pas encore pour Windows à ce jour.

* Cependant, Docker (tout comme Windows et Mac) est le produit d'une compagnie privée tandis que Singularity est un logiciel libre. Ainsi, même si Docker est distribué en tant que freeware avec peu de restrictions, cela peut changer au fil du temps. Ainsi, si vous travaillez pour un laboratoire de recherche public, il est préférable de privilégier une solution libre. L'argent des contribuables ne doit pas être utilisé pour servir des intérêts privés lorsqu'une solution équivalente est disponible dans le libre.
