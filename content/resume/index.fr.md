+++
template = "page.html"
title = "Curriculum Vitae"
date =  2019-08-20
draft = false
tags = ["education", "profile"]
lang = "fr"
+++


Je m'appelle Pierre-Edouard **GUERIN**. Bioinformaticien de formation, après quelques missions au sein des unités de l'INSERM à Paris, je suis maintenant en CDD au CNRS de Montpellier depuis 2017.

_______________________________________________________________________________


<img align="right" width="48rem" height="96rem" src="paris7.png">

# Formation

* **2016: Master double compétence informatique et biologie**, Université Paris Diderot Paris 7, France
* **2014: Licence double compétence informatique et biologie**, Université Paris Diderot Paris 7, France

# Experiences professionnelles
<a href="https://www.ephe.fr/"><img align="right" width="66rem" height="62rem" src="ephe.png"></a>
<a href="https://www.cnrs.fr/"><img align="right" width="48rem" height="48rem" src="cnrs.png"></a>
**Depuis février 2017: Ingénieur biologiste en traitement des données**  
Centre d'Ecologie Fonctionnelle et Evolutive, Montpellier, France  
- Réalisation et mise en production de workflows d'analyse de données de séquençage ADN (technologie RAD-seq) sur 1200 individus parmis 3 espèces de poissons en Méditerrannée pour le projet européen RESERVEBENEFIT
- Réalisation et mise en production de workflows d'analyse des données metabarcoding d'ADNe marin de l'expedition océaonographique de MONACO.
- Conception du protocole et assemblage de la première séquence génomique de référence pour le rouget de roche (*Mullus surmuletus*), le serran (*Serranus cabrilla*) et le sar (*Diplodus sargus*)
- Carte mondiale de la diversité génétique des actinoptérygiens en exploitant les données de la banque [BOLD](http://www.boldsystems.org/)
- Développement logiciel C++ détection et assignation des individus à des populations génétiques à partir de données ADN type génotypage.
- Développement et comparaison de protocoles informatiques du traitement de la donnée de séquençage ADNe en metabarcoding  en étroite collaboration avec la société [SPYGEN](http://www.spygen.com/).
- Analyses du génome de la betterave (Beta vulgaris) en exploitant des données chipseq et les séquences génomiques réferences pour caractériser les régions génomiques associées à la sécheresse.
- Traitement de données de séquençage de génome réduit (RAD-seq) avec une faible couverture de plus de 500 individus du rouget de roche (*Mullus surmuletus*) pour la FONDATION TOTAL (projet SEACONNECT)

<a href="https://www.inserm.fr/"><img align="right" width="100rem" height="24rem" src="inserm.png"></a>
**De janvier 2016 à août 2016: Développeur logiciel python** (stage de Master)
Génétique des diabètes, Paris, FR  
- Génomes humains, Analyse de lourdes données de séquençage haut-débit
- Logiciel qui detecte et annote les variants génétiques rares
- Conception et réalisation d'une interface graphique

<a href="https://www.inserm.fr/"><img align="right" width="100rem" height="24rem" src="inserm.png"></a>
**De février 2015 à juin 2015: Ingénieur biologiste en traitement des données** (stage de Master)  
- modélisation et visualisation 3D des structures de protéine à l'échelle de l'atome
- Optimisation d'une méthode de reconnaissances des repliements dans la structure des protéines
- Amélioration des performances d'un algorithme de prédiction de la structure des protéines


# Projects

## Metabarcoding


> <details><summary>Une des techniques les plus prometteuses pour l'évaluation de la biodiversité et le metabarcoding de l'ADN environnemental. J'ai réalisé l'état de l'Art des méthodes d'analyses en lien avec cette technique et j'ai developpé plusieurs workflows d'analyse informatique pour traiter, stocker et gérer les données produites par la mission océanographique de MONACO.</summary>
><p>
>
>
>
>### Overview: La nécessité d'évaluer la biodiversité marine
> Marine environments, both coastal and offshore, are being severely impacted by traditional and emerging human activities. This is translated into habitat losses, pollution and overexploitation which treats marine >biodiversity. It compromises the sustainability of marine ecosystems and services.
>
>As a response to the environmental degradation, initiatives aims to protect marine ecosystems. Development of reliable marine biodiversity assessment methods is necessary. One of the most promising genetic techniques for >improving biodiversity assessments is the **metabarcoding** of environmental DNA.
>
>### What is Metabarcoding
>
>Indeed, all organisms shed cells containing DNA in their environment, as intra or extra-cellular material for up to a few days. The amplification and high-throughput eDNA sequencing followed by bioinformatic analyses >produces a list of sequences with the ultimate goal to assess species diversity in a given site.
>
>### Assess marine biodiversity all over the world with metabarcoding
>
>eDNA samples were collected by [Monaco Scientific Exploration Yersin](https://fr.wikipedia.org/wiki/Yersin_(navire_oc%C3%A9anographique)) in Guadeloupe, Lengguru, Malpelo Fakarava and Mediteranean sea. Sequencing were performed by [SPYGEN company](http://www.spygen.com/) and I was in charge of the bioinformatics processing of sequencing data.
>
>### My contribution as a computational biologist
>
>I did a state of the Art of available methods and developed serveral workflows to process **metabarcoding** data in order to assess marine biodiversity all over the world. Source codes are available as git repositories on the [Montpellier server dedicated to eDNA analysis](https://gitlab.mbb.univ-montp2.fr/edna).
>
>
></p>
></details>






# Softwares

* **[wfgd](https://shiny.cefe.cnrs.fr/wfgd/)**: carte mondiale de la diversité génétique des poissons
* **[Genbar2](https://github.com/Grelot/genbar2)**: logiciel C++ détection et assignation des individus à des populations génétiques à partir de données ADN type génotypage
* **[DEMORT](https://pypi.org/project/demort/)**: a DEmultiplexing MOnitoring Report Tool
* **[EXAM](https://sourceforge.net/projects/exam-exome-analysis-and-mining/)**: a whole exome sequencing analysis and its graphical interface
* **[COAT](https://github.com/Grelot/diabetesGenetics--COAT)**: a COverage Analysis Tool for exome sequencing data
* **[ORION](http://www.dsimb.inserm.fr/ORION/)**: a sensivitve method for protein template detection


# Publications

* **New genomic ressources for three exploited Mediterranean fishes** (submitted to Molecular Ecology Ressources in november 2019)
* **Global determinants of freshwater and marine fish genetic diversity** ([Nature Communications en février 2020](https://www.nature.com/articles/s41467-020-14409-7))
* **Predicting genotype environmental range from genome–environment associations** ([Molecular Ecology en mai 2018](https://doi.org/10.1111/mec.14723))
* **ORION : a web server for protein fold recognition and structure prediction using evolutionary hybrid profiles** ([Scientific Reports en juin 2016](https://doi.org/10.1038/srep28268))

______________________________________________________________________________

# Autres activités

## Sciences

* Mon [blog scientifique](https://guerinpe.com/articles/)
* Membre de l'association des **JE**unes **BI**oinformaticiens de **F**rance [Jebif](https://jebif.fr/en/)
* Auteur d'articles de vulgarisation scientifique pour la communauté [bioinfo-fr](https://bioinfo-fr.net/author/pierre-edouard-guerin)



## Projets personnels

<img align="right" width="60px" height="60px" src="costa_walk.png">

* **[speckyman](https://github.com/Grelot/speckyman)**: un jeu-video de plate-forme codé en Javascript
* **[fromdnatomusic](https://github.com/Grelot/fromdnatomusic)**: convertir des séquences ADN en piste audio MIDI
* **[Nos data ont du talent](https://www.youtube.com/channel/UCvjBNumU6EvJiiGfxqNfd7Q)**: une chaîne YOUTUBE de représentations graphiques originales de données économiques et démographiques publiques, en particuliers, les séries temporelles.



## Triathlon


Je suis triathlète fftri et membre de l'**U**nion **S**portive des **N**ageurs de Montpellier [USN-MONTPELLIER](https://www.usn-montpellier.fr/usn-web/view/index.php) depuis 2017. Rejoignez-nous !


<img align="center" width="264rem" height="247rem" src="usnm.png">


______
