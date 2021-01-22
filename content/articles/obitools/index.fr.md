+++
template = "page.html"
title = "OBITools: traiter les données de sequençage metabarcoding"
date =  2020-06-27
draft = false
description= "Toutes les informations utiles pour analyser des données de metabarcoding d'ADN environnemental avec les obitools."
tags = ["omics", "tech"]
+++



## Introduction

Les [OBITools](https://doi.org/10.1111/1755-0998.12428) sont une boîte à outils dédiés à l'analyse des données de séquençage ADN haut-débit pour le metabarcodage. Le logiciel peut-être télécharger librement sur ce site web : http://metabarcoding.org/obitools.


## Description de la donnée : petit rappel de biologie

<img align="right" width="360rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/1024px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png">


L'Acide DesoxyriboNucléique (ADN) est une molécule composée de deux chaînes polynucléotidiques qui forment ensemble une structure en double hélice. L'ADN est la molécule qui porte l'information pour le développement de toutes les formes de vies.


* Les molécules ADN sont composés de quatre types de nucléotides :
  * <p style="color:red">thymine (T)</p>
  * <p style="color:green">adenine (A)</p>
  * <p style="color:orange">cytosine (C)</p>
  * <p style="color:blue">guanine (G)</p>  
* Thymine et adenine sont complémentaires : <strong style="color:red">T</strong>==<strong style="color:green">A</strong>
* Cytosine et guanine sont complémentaires : <strong style="color:orange">C</strong>==<strong style="color:blue">G</strong>
* Chaque brin de la double hélice peut être décrit comme une séquence de nucléotides (*e.g.* **ATTCGCT**)
* Un brin est le reverse complément de l'autre (*e.g.* **AGCGAAT** est la séquence reverse complément **ATTCGCT**)
* Le *Sens* d'un brin ADN est :
   * soit positif (**+**) "brin sens" de l'extremité **5'** à l'extremité **3'**
   * soit negatif (**-**) "brin antisens"  de **3'** à **5'**
* L'extremité **5'** designe le début du brin ADN. Il correspond au cinquième carbone du sucre dexosyribose.
* L'extremité **3'** designe la fin du brin ADN. Il correspond au groupe hydroxyle du troisième carbone du dexosyribose.

<img width="480rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/DNA_chemical_structure-1-.fr.svg/1024px-DNA_chemical_structure-1-.fr.svg.png?1601388990848">

Par convention, nous écrivons et lisons une séquence ADN de l'extremité 5' à 3'. Pour décrire une molécule ADN complète, nous écrivons la séquence du brin sens positif (en effet, la séquence du brin ADN antisens négatif est déductible de la séquence du brin sens positif car il est son reverse complément)

## Le contexte du metabarcodage

Déterminer l'ordre dans lequel s'enchaînent les nucléotides composant une molécule ADN, c'est le **séquençage ADN**. Dans le contexte du metabarcodage, nous voulons cibler des séquence de **barcode**. Les barcodes sont des séquences ADN de gènes mitochondriaux avec la propriété suivante :

<pre>
région conservée             région hypervariable              région conservée

===================|||||||||||||||||||||||||||||||||||||||||===================
</pre>

La région conservée est caractéristique d'un groupe taxonomique que nous souhaitons cibler (*e.g.* teleostei). La région conservée est utilisée comme *primer* pour initier une PCR ([Polymerase chain reaction](https://fr.wikipedia.org/wiki/R%C3%A9action_en_cha%C3%AEne_par_polym%C3%A9rase)). La région hypervariable est la séquence du barcode. Elle permet d'identifier une classe, une espèce, voire un individu dans le groupe taxonomique ciblé (on parle alors de *résolution taxonomique* du primer). Dans le **metabarcodage**, les séquences de barcode d'un échantillon sont ciblées puis amplifiées par PCR en utilisant des primer. Ainsi isolés, les barcodes ADN sont regroupés avec d'autres barcodes ADN extraits de d'autres échantillons. Une séquence *tag* de 8 nucléotides est ajoutée à chaque fragment ADN de chaque échantillon. De cette manière, il est possible de retrouver l'échantillon d'origine de chaque fragment ADN au moment du séquençage.


### Séquençage haut-débit

Le séquençage ADN est réalisé sur une librairie de barcodes ADN isolés et amplifiés. Le séquençage des instruments ILLUMINA est *paired-end*. C'est-à-dire que les adapteurs sont incorporés aux deux extremités des fragments ADN de la librairie. Les fragments ADN se lient à la *flowcell* du séquenceur par leurs deux extremités grâce aux adapteurs, formant ainsi un pont. Les réactions PCR amplifient chaque fragment ainsi lié pour produire des groupes de fragments. L'ADN polymérase copie chaque fragment ADN dans les deux directions. A chaque cycle de réplication, un fluorophore attaché à un nucléotide est incorporé au brin naissant. Un laser excite le fluorophore pour chaque fragment ADN qui est est répliqué et un scanner optique collecte les signaux pour chaque groupe de fragments ADN. 

De cette manière, le séquençage haut-débit produit des millions de séquences courtes (typiquement 125 pairs de bases)


<div style="background: #f1f1f1 ;">

### Fichier FASTA

Pour FAST Alignment. Format informatique universel pour décrire des séquences.

```
>ID1 ; a fish
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
GGTAAA​
```
  * La ligne qui commence par un `>` donne des informations relatives à la séquence ADN. ID de la séquence `ID1`. Information relative `a fish`
  * La séquence est écrite sous la forme de ligne de 80 caractères et un retour chariot marque la fin de la séquence.
Un fichier FASTA peut contenir plusieurs séquences qui peuvent être alignées.
</div>
<br>
<div style="background: #e1b501 ;">

### FASTQ files

Pour FASTA Quality. Généralement, ce sont les fichiers qui contiennent les résultats brutes des séquenceurs. Chaque séquence est un read et une séquence de qualité y est ajouté.

```
@HISEQ:250:CADV5ANXX:5:1101:1832:1959 1:N:0:ATCACGATTCTTTCCC
TCAACTACGCCTTCCGGTACACTTACCATGTTACGACTTGCCTCCCCTCGTCAGCGCTT
+
#<<BBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB
```
  * Première ligne : Information. le nom de l’instrument (HISEQ). l’ID de la run (250). L’ID de la flowcell (CADV5ANXX). La lane de la flowcell (5). La tile de la lane de la flowcell (1101). La coordonnées x,y (1832:1959). Si le reads est un backward(2) ou forward(1) reads dans un paired-end ou alors un simple reads(0) dans un single-end. N/Y si Y le reads doit être éliminé selon le contrôle qualité du séquenceur. Pas de contrôle informatique supplémentaire (0) propre à HISEQ. Barcode/index/tag du reads (permet d’identifier l'échantillon d’origine à partir duquel l’ADN a été lu, en d’autres mots : l’échantillon auquel “appartient” le reads )
  * Deuxième ligne : DNA sequence
  * Troisème ligne : symbole + entre la séquence de nucléotides et la séquence qualité
  * Quatrième ligne : Quality. qualité de la résolution de chaque nucléotide de la séquence par le séquenceur. Il faut comprendre que chaque caractère a une valeur selon le code ASCII de 0 à 255. Par exemple le F c’est 70 et B c’est 66.


</div>

## Metabarcoding data processing workflow

Ici nous décrivons le workflow bio-informatique utilisé par la compagnie [SPYGEN](http://www.spygen.com/) pour produire des matrices présence/absence des espèces dans l'environnement à partir de données de séquençage ADN de métabarcoding. Ce workflow s'appuie sur le recours des OBItools.

<img align="right" width="520rem" src="https://gitlab.mbb.univ-montp2.fr/edna/snakemake_only_obitools/-/raw/master/schema_only_obitools.png">

### Assemble reads

test



## References

* **Blind assessment of vertebrate taxonomic diversity across spatial scales by clustering environmental DNA metabarcoding sequences** ([Ecography Journal in 2020](https://doi.org/10.1111/ecog.05049))
* **OBItools: a unix‐inspired software package for DNA metabarcoding** ([Molecular Ecology Resources in 2016](https://doi.org/10.1111/1755-0998.12428))
