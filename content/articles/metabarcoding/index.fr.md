+++
template = "page.html"
title = "Les métabarcodes"
date =  2019-02-09
draft = false
description="Une méthode de capture et d'amplification des codes-barres ADN qui permet grâce au séquençage haut-débit l'identification des espèces ou l'estimation de la diversité génétique dans un ou plusieurs échantillons."
tags = ["omics"]
+++


L'une des technologies en génomique les plus prometteuses pour l'évaluation de la biodiversité est le *métabarcode* (de l'anglais *metabarcoding*) de l'ADN environnemental (ADNe). J'ai travaillé longuement sur ces méthodes et developpé plusieurs workflows pour traiter et analyser les données de métabarcodes. J'ai notamment été en charge du traitement des données génomiques récoltées par l'expedition scientifique d'exploration marine de Monaco entre 2018 et 2020.


## Un point d'horizon : pourquoi évaluer la biodiversité marine ?

Les environements marins, qu'ils soient sur les côtes ou au large sont tous sévérement impactés par les activités humaines récentes ou traditionnelles. Il peut s'agir de regressions ou de pertes d'habitats pour la faune, de pollutions ou de surexploitation des ressources menaçant ainsi la biodiversité marine. Certains effets de l'activité humaine compromettent alors la durabilité des écosystèmes marins et leurs services pour l'approvisionnement (pêcherie et matériaux de construction), pour le tourisme, pour la culture et finalement pour la régulation du climat et la séquestration du carbone. Afin de prévenir la dégradation de ces environnements, de nombreuses initiatives gouvernementales ou privées visent à protéger les écosystèmes marins. C'est pourquoi le développement d'outils fiables pour mesurer et évaluer la biodiversité marine est nécessaire. Au cours de la décennie 2010, l'état de developpement du *metabarcoding* a progressé et c'est une technologie appliquée très largement de nos jours. Les résultats de cette méthode sont prometteurs et sa démocratisation pourrait à terme améliorer l'évaluation de la biodiversité.


## Qu'est ce que le métabarcode

### Brève histoire de l'identification moléculaire

A l'origine, les microbiologistes identifiaient les bactéries en observant leurs caractères morphologiques par exemple au microscope. C'est en 1965 que Zuckekandl et Pauling proposent d'utiliser les séquences ADN comme marqueur moléculaire de l'évolution. Cependant les techniques de séquençage ADN n'apparaissent qu'en 1970 avec la méthode Sanger.

En 1986, Mullis et al inventent la réaction de polymérisation en chaîne qui permet d'amplifier le matériel ADN *in vitro*. Cette méthode de biologie moléculaire révolutionne le domaine de la microbiologie car elle permet de cibler par amplification un marqueur ADN spécifique au niveau de gènes ribosomaux. Permettant ainsi d'identifier les espèces présentes dans un échantillon à partir de leurs molècules ADN.


### Les premiers codes-barres taxonomiques

Au début des années 2000, les écologistes s'interessent à ces méthodes de biologie moléculaire d'amplification des marqueurs moléculaires type ADN. Paul Herbert est le premier à parler de *barcoding ADN*. Il recommande d'utiliser un marqueur moléculaire standardisé, permettant d'identifier l'ensemble des espèces des ordres du vivant, exactement comme un code-barre.

Le premier code-barres ADN est un fragment de 658 paires de bases du gène mitochondrial de la sous-unité de la Cytochrome Oxydase I (COI). Chaque espèce de vertébrés est identifiable par sa séquence ADN du COI. Pour repertorier de manière systématique l'ensemble des codes-barres du COI, le consortium scientifique Barcode of Life est crée en 2004. En 2007, la banque de données mondiales des codes-barres ADN est publiée. Le [Barcode Of Life Data System](http://www.boldsystems.org/) (BOLD) compte aujourd'hui des millions d'espèces repertoriées avec leur barre-codes ADN issues de milliers de projets scientifiques à travers le monde. 

Les marqueurs chloroplastiques RBCL(Ribulose Biphosphate CarboxyLase; 553 paires de base) et MATK(MATurase K; 879 paires de base) sont designés comme marqueurs standards pour les plantes en 2009. En 2012, les *fungi* ont leur propre code-barres standard l'espaceur interne transcrit (ITS; 450 paires de bases). Concernant les bactéries le marqueur ribosomique 16S est principalement utilisé bien qu'il n'existe pas de marqueurs reconnus comme standard.


### ADN environnemental

Nous savons que tous les organismes vivants perdent et dispersent des morceaux de peau ou d'écailles dans leur environnement. Le matériel ADN contenu dans et autour des cellules constitutives de ces tissus persistent alors plusieurs jours dans l'environnement. Les cellules eukaryotes possèdent en elle des mitochondries, organite siège de la respiration cellulaire indispensable au metabolisme. Chaque cellule compte 300 à 1000 mitochondries. La mitochondrie possède son propre ADN distinct de l'ADN nucléaire de la cellule. L'ADN de la mitochondrie est circulaire et de dimension modeste (environ 20 Kpb). Il compte tout au plus une quinzaine de gènes. Les gènes mitochondriaux sont donc bien plus abondant que les gènes nucléaires dans l'environnement.


### Du code-barres au métabarcode

Le **barcoding** est une méthode d'identification des espèces qui utilise une séquence ADN provenant d'un ou plusieurs gènes spécifiques. Tout comme les codes-barres des supermarchés permettent d'identifier les produits, certaines séquences ADN *i.e* les codes-barres ADN permettent d'identifier les espèces voire les individus. Différentes régions de gènes sont utilisées pour identifier les différents groupes d'organismes à l'aide de codes-barres.

Si le barcoding s'applique à une espèce ciblée dans un environnement donné, le métabarcode est une méthode qui cible l'ensemble des séquences codes-barres capturées dans un environnement donné. Le séquençage de l'ensemble des codes-barres dans l'environnement ou métabarcode est rendu possible grâce aux méthodes de séquençage haut-débit notamment le séquenceur illumina. En  effet, grâce au métabarcode il devient alors possible de detecter la quasi-totalité des organismes présents dans un échantillon issus d’un environnement complexe.


## Materiels et methodes

Les méthodes de séquençage haut débit permettent d’obtenir rapidement des centaines de millions de métabarcodes à partir d’un environnement complexe. A partir de cette information, il devient possible de mesurer la biodiversité dans l'environnement. En effet, la quasi-totalité des organismes présents dans l'environnement sont detectés.


### Echantillonnage et capture de l'ADN environnemental


reprendre la video de Lola et photo Emilie

### Préparation des librairies et séquençage haut-débit de l'ADNe

L'ADN présent dans l'échantillon est découpé aléatoirement en fragments par sonification. Des tailles précises de fragments sont ensuite selectionnés. Des amorces ADN sont ensuites incorporés aux extremités 3' et 5' des fragments ADN selectionnés. Ces amorces permettent la fixation de la librairie (les fragments ADN selectionnés) sur une surface solide. Les fragments ADN fixés ainsi sont alors amplifiés par PCR. 

Le séquençage est effectué à l'aide d'amorces, d'ADN polymérase et de quatre nucléotides de terminaison réversibles marqués par un fluorophore. Après l'incorporation d'un nucléotide, l'image est capturée par une camera et l'identité de la première base est enregistrée par un robot. Les terminateurs et les fluorophores sont ensuite retirés et les étapes d'incorporation, de détection et d'identification sont répétées. La longueur moyenne des lectures est d'environ 150 paires de bases. Le séquençage par synthese ADN est une opération parallélisée, ainsi en une course, des millions de lectures sont générées.


Il est à noter que des erreurs de réplication peuvent survenir pendant la PCR. Le taux d'erreur du séquençage est néanmoins assez faible. Enfin, il est possible de séquencer les fragments par leurs deux extrémités pour accroîte la précision du séquençage. Cette méthode est appelée «séquençage pairé» de l'anglais *paired-end sequencing*.


### Traitement bioinformatique

#### Assemblage

Le séquençage ADN a produit des lectures courtes des séquences ADN. De plus, bien que le taux d'erreur du séquençage soit faible, les lectures ADN en sortie de séquençage ne sont pas encore assez fiable pour l'identification des espèces. Les lectures complémentaires d'un même fragment ADN sont donc assemblées ensemble. Aini, la séquence complète du barre-code est reconstituée tout en augmentant la fiabilité de la séquence lue.

#### Demultiplexage

A la sortie du séquenceurs, les séquences ADN issus des différents échantillons sont mélangées. Le demultiplexage consiste à réassigner chaque séquence ADN lue à son échantillon d'origine. Pour identifier l'échantillon d'origine d'une séquence lue, un court fragment ADN appellé *étiquette* a été incorporé en amont du séquençage. Il suffit de detecter l'*étiquette* sur la séquence pour retrouver son échantillon d'origine. Si une séquence n'a pas d'*étiquette* à ce stade alors elle est éliminée de l'étude.

#### Groupements

Les séquences identiques sont regroupées et comptées pour chaque échantillon. Certaines séquences ne différent que de quelques bases entre elles. En effet, lors de l'amplification des fragments ADN qui précède le séquençage, des mutations surviennent aléatoirement sur certaines copies. En sortie de séquençage, beaucoup de séquences sont en fait des versions legerement erronnées de la séquence original. Pour éliminer le bruit de l'amplification, on utilise des algorithmes pour regrouper les séquences similaires entre elles. L'abondance relative permet de distinguer la séquence d'origine du bruit.

#### Assignation taxonomique

Cette étape requiert une base de données de référence. C'est-à-dire une liste de séquences de barres-code correspondant à des espèces connues. Si une séquence s’aligne sur une référence, son assignation dans l'arbre du vivant est obtenue en utilisant la taxonomie du NCBI (National Center for Biotechnology Information). Si une séquence s'aligne sur plusieurs références l'algorithme du *Lowest Common Ancestor* (LCA) est appliqué. Le LCA recherche le dernier noeud commun de l'arbre phylogénétique à partir duquel divergent les branches de chacune des lignées références impliquées. Le LCA permet donc d’assigner la séquence au dernier ancêtre commun. Finalement, chaque code-barre de chaque échantillon est assigné à un taxon. On obtient donc une liste des taxons présents dans les différents échantillons environnementaux.



### Analyses et applications : l'exemple des poissons en milieu marin


?


### Pour aller plus loin

Lola Romant
{{ youtube(id="8b97UV6lXSk") }}



## References

> **Molecules as documents of evolutionary history**
>
> *Emile Zuckerkandl, Linus Pauling*
>
> Journal of theoretical biology. 1965. DOI:[10.1016/0022-5193(65)90083-4](https://doi.org/10.1016/0022-5193(65)90083-4)


> **Specific enzymatic amplification of DNA in vitro: the polymerase chain reaction**
>
> *K Mullis, F Faloona, S Scharf, R Saiki, G Horn, H Erlich*
>
> Cold Spring Harb Symp Quant Biol. 1986. DOI: [sqb.1986.051.01.032](https://doi.org/10.1101/sqb.1986.051.01.032)


> **Biological identifications through DNA barcodes**
>
> *Paul D. N. Hebert, Alina Cywinska, Shelley L. Ball and Jeremy R. deWaard*
>
> Proceedings of the Royal Society B. 07 February 2003. DOI: [rspb.2002.2218](https://doi.org/10.1098/rspb.2002.2218)

> **BOLD: The Barcode of Life Data System**
>
> *Sujeevan Ratnasingham, Paul D. N. Hebert*
>
> Molecular Ecology Notes. 24 January 2007. DOI: [j.1471-8286.2007.01678.x](https://doi.org/10.1111/j.1471-8286.2007.01678.x)



> **Développements méthodologiques autour de l’analyse des données de metabarcoding ADN**
>
> *Celine Mercier*
>
> Génétique des plantes. Université Grenoble Alpes, 2015. NNT: [2015GREAV060](https://tel.archives-ouvertes.fr/tel-01685615/document).

> **Dynamique de la structure des génomes et de leur biogéographie dans l’océan: analyses comparatives des données métagénomiques du projet Tara Oceans pour l’étude de la microalgue Bathycoccuset des communautés planctoniques globales.**
>
> *Thomas Vannier*
>
> Structure et dynamique des systèmes vivants. Université Paris Saclay, 2017. NNT: [2017SACLE002](https://www.biblio.univ-evry.fr/theses/2017/2017SACLE002.pdf).


> **Nécessité, potentiel et limitations de l’approche en unités taxonomiques moléculaires pour analyser la biodiversité de l’ADN environnemental des poissons**
>
> *Virginie Marques*
>
> Sciences agricoles. Université Montpellier, 2020. NNT: [020MONTG039](https://tel.archives-ouvertes.fr/tel-03209995/document)
