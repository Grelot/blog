+++
template = "page.html"
title = "Environements virtuels, conteneurs et reproductibilité scientifique"
date =  2018-01-19
draft = false
tags = ["tech", "sciences"]
lang = "fr"
+++


## La nécessité de la reproductibilité en informatique

### Qu'est ce que la reproductibilité ?

La **reproductibilité** d'une preuve scientifique est la proximité des **mesures** observées sur une même **grandeur** en suivant la méthode décrite correspondante. (*e.g.* une publication et son code source approuvés par des pairs dans une revue scientifique)



### Pourquoi travailler de façon reproductible ?

En pratique, cela permet de valider les experiences scientifiques sans en garantir l’exactitude, la justesse ou la pertinence. C'est aussi utile pour tester une hypothèse et faciliter la diffusion et la publication des résultats. En ce qui concerne, le calcul numérique et les simulations, à l'exigence de **réplicabilité** et de **reproductibilité**, il faut encore ajouter la **reutilisabilité**.


### Comment travailler de façon reproductible ?

Règle de **R5** ([ReSciences](https://hal.archives-ouvertes.fr/hal-01573262))


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

