+++
template = "page.html"
title = "L'Atlas des gènes eukaryotes de la mer"
date =  2020-09-19
draft = false
description= "Description d'une méthode de metatranscriptomique appliquée à la detection des gènes exprimés dans les communautés de zooplanktons dans les océans. Ces échantillons ADNe ont été prélevés sur les stations marines de l'expedition Tara Ocean."
tags = ["omics", "sciences"]
+++


Les eucaryotes unicellulaires et les zooplanctons multicellulaires de petite taille représentent la majeure partie de la biomasse planctonique de la mer. Des échantillons d'eau de mer ont été prélevés dans l'océan mondial lors de l'expédition Tara Oceans afin de générer un catalogue mondial de référence des gènes des eucaryotes planctoniques échantillonnés à l'ARN afin d'explorer les modes d'expression des communautés à différentes échelles microscopiques en fonction de la biogéographie et des conditions environnementales.


## Séquençage ARN

L'étape clé du séquençage ARN est de transformer les fragments ARN end ADN complémentaire (ADNc) grâce à une enzyme reverse transcriptase. Les adaptateurs sont ajoutés à chaque extremité des fragments ADN constituant la librairie. Ces adaptateurs contiennent les éléments fonctionnels qui permettent le séquençage. L'ADNc est alors séquencé, produisant des millions de séquences courtes appellées *lecture* qui correspondent à une partie de la séquence ADN ne partant ou bien d'une extremité ou bien de l'autre extremité des fragments ADNc séquencé. La profondeur de couverture est le nombre de lectures générés pour chacun de ces séquences ADN. 



#### 1. Extraction des nucléides

Le broyage cryogénique est une technique très efficace pour réduire en poussière des substances résistances telles que les plantes ou les tissues animaux. Au moment du broyage, l'ADN et l'ARN sont extraits ensemble. L'ARN est purifié grâce à ne méthode d'extraction utilisant le phenol-chloroforme. Il est alors possible de quantifier l'ARN et l'ADN présent dans l'échantillon par fluorimétrie.


#### 2. Construction de la librairie pour le séquençage

Un traitement à la désoxyribonucléase est appliqué sur le extractions des nucléides. Ainsi l'ADn est digéré et éliminé. Ensuite, afin de cibler plus spécifiquement les ARN codants, une selection est opérée sur les queues 3' polyadénylées des ARN. L'ARN est alors rétrotranscrit en ADNc. En effet, l'ADN est bien plus stable que l'ARN et peut donc être amplifiée (l'amplification utilisant une enzyme spécifique à l'ADN, l'ADN(taq)polymérase). Enfin, l'ADN est fragmenté par sonification pour générer des fragments de taille homogène de 101 paires de bases. Les ADNc sont indexés avec un *code-barre* pour pouvoir être reconnues plus tard par bioinformatique. De cette manière, plusieurs échantillons peuvent être séquencées sur la même lane du séquenceur. C'est le séquençage multiplexé.


#### 3. Séquençage

Lorsque la librairie ADN est prête, et les adaptateurs du séquenceur ajoutées aux fragments ADN, cette librairie d'ADNc est séquencé sur une machine Hiseq.


<div style="background: #f1f1f1 ;">

## Mots clés
**ADN complémentaire (ADNc):** une molécule ADN synthétisé à partir d'une molécule ARN (*e.g.*,ARN messager (ARNm)) dans une réaction catalysée par une enzyme rétrotranscriptase.

**Librairie:** un ensemble de fragments ADN avec un adaptateurs attachés. Ces adaptateurs ont été conçus pour permettre l'interaction du fragment ADN avec la plaque du séquençeur. Une librairie peut être produite à partir d'un génome brut ADN ou à partir d'ARN. Dans le cas du séquençage d'ARN, la préparation des librairies nécessite une étape supplémentaire : la rétrotranscription des molécules ARN en molécules ADN complémentaire. L'étape de fragmentation des molécules ADN peut être réalisé avant ou après la synthèse des ADNc.

**Lecture:**  Une séquence de caractères ATGC généré par le séquenceur. La lecture est *in fine* la séquence litérale d'un seul et unique fragment ADN de la librairie. Si une molécule ARN était fortement exprimée et donc présentaient de nombreuses copies dans l'échantillon, alors un nombre tout aussi important de copies sera générées par le séquenceur. Les lectures peuvent donc être redondantes.

**Multiplexage:** rassembler plusieurs librairies dans un seul séquençage. Dans un séquençage multiplexé, les séquences *code-barres* sont ajoutés à chaque fragment ADN de chaque librairie de telle sorte que chaque *lecture* puisse être identifiée à son échantillon d'origine lors de l'analyse bioinformatique.

</div>


## Assemblage et construction du catalogue de gènes

Les séquences *lecture* sont alignées et assemblées ensemble sous forme de *contig* grâce à l'outil [VELVET](https://www.ebi.ac.uk/~zerbino/velvet/). VELVET est un assembleur qui exploite les graphes de Bruijn dans lesquelles chaque noeud sera constituer des mots redondants observés parmis les séquences (*k-mers*). Un *k-mer* est donc representé par un noeud unique du graphe. La partie coûteuse en calcul pour la construction d'un graphe de Bruijn est l'étape de hashage des lectures en fonction de la taille fixée des k-mers (les k-mers générés ont 63 caractères dans cette étude par exemple). Cette approche est plus avantageuse en terme de complexité en temps comparé à un simple alignement par paire de toutes les séquences. En effet, la forte profondeur de couverture des séquençage ARN induit une forte redondance des lectures observées. Une fois toutes les lectures hashées, celles-ci sont entrées dans le graphe en tant qu'arêtes reliant les différent noeud représentant les k-mers.

Pour chaque groupe de contigs, le contig le plus long est conservé en tant que séquence représentative du groupe. Ces séquences représentatives sont BLASTées contre une base de données de séquences références pour les organismes prokaryotes, les mitochondries et les chloroplastes. Les séquences sont regroupées si elles présentent une identité d'au moins 70% avec la référence. Ainsi, les séquences similaires sont regroupées sous la forme d'un catalogue d'**unigènes**. En gros, un unigène est un transcript complet ou partiel assemblé à partir des lectures métatranscriptomiques sur au moins un site d'échantillonnage des stations *Tara Ocean*.


## Assignation taxonomique

Pour assigner un groupe taxonomique à chaque unigène, une base de référence est construite à partir d'**UniRef**. Les similarités de séquence entre les gènes du catalogue et la base de références sont calculés par [DIAMOND](http://www.diamondsearch.org/index.php). DIAMOND est un aligneur de séquences traduites (comparer des séquences ADN qui sont des chaînes de nucléotides avec des séquences de protéine qui sont des chaînes d'acides aminés). DIAMOND est particulièrement indiqué pour traiter efficacement des jeux de données massives tel que ceux générés dans le cadre de la metatranscriptomique. Pour avoir une idée de sa vitesse, ils permet l'alignement de séquences ADN traduites à 20,000 fois la vitesse d'un BLAST classique. L'assignation taxonomique suit la méthode du dernier ancêtre commun. Pour chaque unigène, la meilleure séquence référence avec une similarité d'au moins 90% est conservée. Cette séquence référence permet alors d'assigner le taxon correspondant à l'unigène.


## Caractérisation fonctionnelle des unigènes

Les domaines protéiques sont prédits avec [HMMER](http://hmmer.org/). HMMER est un outil pour la recherche de relation d'homologie entre des séquences en comparant non pas les séquences entre elles mais des profils de séquences (alignement multiple de séquences similaires). Les séquences homologues des unigènes sont recherchées dans la banque de profils de séquences de domaines protéiques **Pfam**. Ainsi un domaine protéique est prédit pour chaque unigène.


<div style="background: #91DC7F; ">

## Banque de données de protéines et de profils de séquences

**UniProt :** banque de données de séquences de protéines et leurs fonctions associées.

**Unigène :** regroupement de séquences non-redondantes centrées sur un gène. Chaque unigène est un groupe qui contient des séquences représentatives d'un seul gène. 

**UniRef:** **Uni**Prot **Ref**erence propose des groupements de séquences extraites de la banque UniProt une couverture totale de [l'espace de sequence](https://fr.qaz.wiki/wiki/Sequence_space_(evolution)).

**Pfam:** la banque de données des familles de protéines, chacune représentée par des alignements de séquences multiples ou profils de séquences. Les protéines sont généralement composées d'une ou plusieurs régions fonctionnelles, communément appelées *domaines*. Différentes combinaisons de domaines donnent naissance à la gamme diversifiée de protéines que l'on trouve dans la nature. Les requêtes Pfam sont basées sur les référencede la banque UniProt.


</div>

## Expression et abondances des unigènes

Pour estimer l'abondance (un proxy de l'expression) de chaque unigène dans chaque échantillon environnemental, les lectures sont alignées sur le catalogue d'unigènes. Ainsi à partir du nombre d'occurences de chaque unigène dans chaque échantillon observé, le **RPKM** est calculé. L'abondance de chaque unigène est formulée selon deux grandeurs :
* L'abondance relative du gène par rapport à l'abondance de tous les gènes dans un même taxon
* La fraction que représente un taxon sur l'ensemble des abondances de gènes


<div style="background: #f1f1f1 ;">

**Reads Per Kilobase of transcript, per Million mapped reads (RPKM)** est une unité normalisée de l'expression d'un transcript. Elle est calculée en fonction de la longueur du transcript pour compenser le fait que les protocoles de séquençage ARN génèrent une profondeur de séquençage plus élevée pour les molécules ARN plus longues.
</div>


## Conclusion

Nous avons présenter le catalogue mondial des transcripts ARN de la mer. C'est une ressource interessante pour étudier de manière approfondie la génétique des eucaryotes et la dynamique de leur expression dans l'environnement. La métatranscriptomique est donc une approche efficace pour observer l'écologie fonctionnelle des communautés planctoniques dans l'océan.


## References

> **A global ocean atlas of eukaryotic genes**
>
> *Quentin Carradec, Eric Pelletier, [...] Patrick Wincker*
>
> Nature Communications. 2018 Jan 25. DOI: [10.1038/s41467-017-02342-1](https://doi.org/10.1038/s41467-017-02342-1)