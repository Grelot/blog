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

<img align="right" width="320rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/1024px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png">


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

Par convention, nous écrivons et lisons une séquence ADN de l'extremité 5' à 3'. Pour décrire une molécule ADN complète, nous écrivons la séquence du brin sens positif (en effet, la séquence du brin ADN antisens négatif est déductible de la séquence du brin sens positif car il est son reverse complément)

## Le contexte du metabarcodage

Déterminer l'ordre dans lequel s'enchaînent les nucléotides composant une molécule ADN, c'est le **séquençage ADN**. Dans le contexte du metabarcodage, nous voulons cibler des séquence de **barcode**. Les barcodes sont des séquences ADN de gènes mitochondriaux avec la propriété suivante :

<pre>
région conservée             région hypervariable              région conservée

===================|||||||||||||||||||||||||||||||||||||||||===================
</pre>

La région conservée est caractéristique d'un groupe taxonomique que nous souhaitons cibler (*e.g.* teleostei). La région conservée est utilisée comme *amorce* pour initier une PCR ([Polymerase chain reaction](https://fr.wikipedia.org/wiki/R%C3%A9action_en_cha%C3%AEne_par_polym%C3%A9rase)). La région hypervariable est la séquence du barcode. Elle permet d'identifier une classe, une espèce, voire un individu dans le groupe taxonomique ciblé (on parle alors de *résolution taxonomique* du primer). Dans le **metabarcodage**, les séquences de barcode d'un échantillon sont ciblées puis amplifiées par PCR en utilisant des amorces. Ainsi isolés, les barcodes ADN sont regroupés avec d'autres barcodes ADN extraits de d'autres échantillons. Une séquence *tag* de 8 nucléotides est ajoutée à chaque fragment ADN de chaque échantillon. De cette manière, il est possible de retrouver l'échantillon d'origine de chaque fragment ADN au moment du séquençage.


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
<div style="background: #f1f1f1 ;">

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

## Chaîne de traitement de données de séquençage ADNe metabarcodage

Ici nous décrivons le workflow bio-informatique utilisé par la compagnie [SPYGEN](http://www.spygen.com/) pour produire des matrices présence/absence des espèces dans l'environnement à partir de données de séquençage ADNe de metabarcodage. Ce workflow s'appuie sur le recours des OBItools.

<img align="right" width="520rem" src="https://gitlab.mbb.univ-montp2.fr/edna/snakemake_only_obitools/-/raw/master/schema_only_obitools.png">


### 1. Assemblage des lectures

`illuminapairedend` aligne et assemble les deux lectures 5'->3' et 3'->5' d'une même paire de séquences. Lorsque les deux séquences des lectures se chevauchent avec un score d'alignement satisfaisant, une séquence composée des deux lectures est alors produite.

### 2. Demultiplexing

Nous avons vu que pendant le séquençage, les séquences étaient multiplexés afin de traiter plusieurs échantillons dans le séquenceur. Les échantillons sont identifiables grâce à un petit morceau d'ADN incorporé aux extremités 5' et 3' de chaque séquence. Ce petit morceau d'ADN est appellé une étiquette ou *tag* en anglais. L'étape de *demultiplexing* consiste à identifier l'échantillon d'origine de chaque séquence à partir des étiquettes.

`ngsfilter` recherche des séquences *tag* et *amorces* dans les directions 5' et 3' de chaque séquence consensus. Les amorces et les étiquettes sont enlevées et l'échantillon d'origine est annotée sur chaque séquence.

### 3. Filtrer et regrouper

Les séquences barcodes identiques sont regroupés par `obiuniq`. Alors les séquences barcodes avec une faible profondeur de couverture (signifiant que l'amplification PCR a échoué sur le fragment ADN correspondant lors de la préparation de la librairie pour le séquençage) sont éliminées avec `obigrep`. Enfin,

`obiclean` recherche les clones PCR. L'algorithme de detection est le suivant: une séquence *S1* est définie comme variante d'une autre séquence *S2* lorsque :
  * *S2* est plus abondant que *S1*. Le rapport des profondeurs de couverture *S1 S2* est inférieur à un seuil donné.
  * *S1* et *S2* sont similaires. La distance nucléotidique (nombre de nucléotides différents) sur l'alignement *S1 S2* est faible

Les séquences sont alors classifiées ainsi :
* Une séquence qui est un variante d'une autre séquence est un **clone PCR**.
* Une séquence qui n'est pas une variante mais ne possède pas de variant est une **erreur de séquençage**.
* Une séquence qui n'est pas une variante et qui possède des variantes est une **séquence originale**.

Seule les séquences originales sont conservées pour la suite du traitement.

<div style="background: #f1f1f1 ;">

### Clones PCR

A chaque cycle PCR, l'ADN est dupliqué. Ici avec l'exemple d'une séquence originale AAAAATGC. A chaque cycle, il  ya une probabilité (faible) qu'une erreur de réplication (une mutation) se produise. Par exemple ici il y a une mutation sur le premier nucléotide **T**AAAATGC au troisième cycle.

```
                                    +- TAAAATGC
                       +- AAAAATGC -+  
                       |            +- AAAAATGC
          +- AAAAATGC -+
          |            |            +- AAAAATGC
          |            +- AAAAATGC -+
          |                         +- AAAAATGC
AAAAATGC -+
          |                         +- AAAAATGC
          |            +- AAAACTGC -+
          |            |            +- AAAAATGC
          +- AAAAATGC -+
                       |            +- CGAAATGC
                       +- CAAAATGC -+
                                    +- CAAAATGC
```                 

| Sequence | Profondeur de couverture (~abondance) |
|----------|----------------|
| AAAAATGC | 10X            |
| CAAAATGC | 2X |
| CGAAATGC | 1X |
| TAAAATGC | 1X |


A la fin de l'amplification PCR (dans cet exemple il y a eu 3 cycles), nous constatons que la séquence originale est toujours la plus abondante. Les séquences mutées sont beaucoup moins abondante car elles sont apparues dans les cycles suivants et produiront donc moins de clones qui eux même sont suseptibles de muter.


Tout l'enjeu du traitement informatique est d'éliminer les clones PCR qui contiennent une information corrompue pour ne conserver que la séquence originale.

</div>


### 4. Base de Réference

La base de référence est un ensemble de séquences représentatives d'un groupe de taxons tels que les espèces. Chaque taxon est situé sur l'arbre vivant selon la taxonomie NCBI.

Pour construire une base de référence pour le metabarcodage :

* Télécharger les séquences d'ADN d'espèces connues. Ces séquences sont des gènes mitochondriaux (*e.g.* 12S ou 16S pour le groupe taxonomique des téléostéens).
* Concevoir une séquence d'amorce capable de cibler le taxon d'intérêt.
* `ecopcr` est un logiciel qui simule une digestion PCR *in silico*. Nous utilisons donc l'amorce pour extraire les séquences du barcodes.
* Ensuite, nous utilisons la [taxonomie NCBI](ftp://ftp.ncbi.nih.gov/pub/taxonomy/taxdump.tar.gz) pour attribuer à chaque séquence de barcodes une branche de l'arbre du vivant.

### 5. Assignation taxonomique

`ecotag` associe les séquences du barcodes aux taxons correspondant de la base de référence. Elle compare chaque séquence aux séquences connues representatives des taxons. La séquence la plus similaire est assignée au taxon correspondant dans la base. Les informations suivantes sont enregistrées : 
* la séquence de la base de données de référence qui correspond le mieux
* le score d'identité
* un taxid entier unique faisant souvent référence à un taxon dans la taxonomie du NCBI et le nom scientifique lié au taxid entier. Il permet d'identifier l'ancêtre commun le plus récent de chaque séquence.

Dans le cas où il y a ambiguité entre deux séquences de la base, alors le parent dans l'arbre du vivant est assigné. Par exemple si il y a une ambiguité entre deux espèces, alors c'est le genre de ces deux espèces qui sera attribué au barcode de l'échantillon.


### 6. Tables présence/absence des espèces pour chaque échantillon

Les informations inutiles sont supprimées. Les séquences de barcodes sont triées par ordre décroissant d'abondance. Enfin, un fichier délimité par des tabulations qui peut être ouvert par Excel ou R est produit. Le tableau est une matrice avec en ligne les différents barcodes identifiés et en colonne l'abondance mesurée pour chaque barcode parmis les échantillons ainsi que l'assignation taxonomique.

## Conclusion

Grâce aux OBItools, nous avons été capable de traiter des données brutes de séquençage ADNe de type metabarcodage. D'abord, les fragments d'ADN ont été assemblés pour reconstituer les barcodes. Ensuite, chaque barcode a été assigné à son échantillon d'origine (demultiplexing). Troisièmement, les barcodes ont été filtrés et regroupés par similarité. Alors, un taxon a été assigné à chaque barcode. Enfin, une table de la présence/absence des espèces pour chaque échantillon est produite. Cette table servira de base pour les prochaines analyses réalisées en laboratoire.


## References

> **Blind assessment of vertebrate taxonomic diversity across spatial scales by clustering environmental DNA metabarcoding sequences**
>
> *Virginie Marques, Pierre‐Edouard Guerin, Mathieu Rocle, Alice Valentini, Stephanie Manel, David Mouillot, Tony Dejean*
>
> Ecography. 2020 Aug 04. DOI: [10.1111/ecog.05049](https://doi.org/10.1111/ecog.05049)

> **OBItools: a unix‐inspired software package for DNA metabarcoding**
>
> *Frederic Boyer, Celine Merciern, Aurelie Bonin, Yvan Le Bras, Pierre Taberlet, Eric Coissac*
>
> Molecular Ecology Resources. 2015 May 09. DOI: [10.1111/1755-0998.12428](https://doi.org/10.1111/1755-0998.12428)
