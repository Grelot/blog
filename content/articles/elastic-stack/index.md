+++
template = "page.html"
title = "Elastic Stack"
date =  2024-04-23
draft = false
description="My training Elastic Stack with Ambient IT"
[taxonomies]
tags = ["sys"]
+++

strange not working
<!-- more -->


## History

2004 compass

2010



## format JSON

JSON (JavaScript Object Notation) permet de stocker des données textuelles. L’absence de
schéma du format JSON lui offre une grande flexibilité dans le stockage de ses données.
D’autant plus qu’il possède une syntaxe simple et une structure en arborescence lui
permettant de rester efficace même en cas de gros volume de données

## Log files

Chaque ordinateur tient un journal de bord des événements qui ont eu lieu sur celui-ci.
Ces informations sont stockées dans des fichiers appelés Logs. Log est le diminutif de
logging.
On peut extraire de nombreuses informations de ces fichiers, mais généralement on les
utilisent pour déterminer le ou les facteurs qui entraînent le mauvais fonctionnement d’un
processus ou d’un logiciel.
Consulter les fichiers de logs d’une seule machine est relativement facile. Cela devient
rapidement plus compliqué quand le nombre de celle-ci augmente, une des solutions à ce
problème : la centralisation des logs.
Dans Ubuntu, la majorité des fichiers de logs se trouve dans le dossier suivant :
cd /var/log

Les données que nous cherchons à extraire de ces fichiers sont:
- Les erreurs système
- Les statuts de certains services (nfs, apache, postgresql, mariadb)
- L’espace disque occupé
- L’utilisation du CPU
- L’utilisation de la mémoire RAM
- Le nombre de connections avec leurs IPs sur les serveurs Web.
- Le nombre de requêtes et leurs durées pour les bases de données.


## logstash filtre

## Grafana 

Grafana est une alternative à Kibana pour la partie monitoring et des alertes, et est donc
similaire, en plus d'être compatible avec Elasticsearch.