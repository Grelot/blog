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

 a pool of DNA fragments with adapters attached. Adapters are designed to interact with the sequencing platform by the surface of the flow-cell (Illumina). A sequencing library can be made by starting from raw genomic DNA or from RNA. In any RNA sequencing library there’s an additional step: the RNA conversion in cDNA. The fragmentation step can be done before or after the cDNA synthesis.

**Lecture:**  Une séquence de caractères ATGC généré par le séquenceur. La lecture est *in fine* la séquence litérale d'un seul et unique fragment ADN de la librairie. Si une molécule ARN était fortement exprimée et donc présentaient de nombreuses copies dans l'échantillon, alors un nombre tout aussi important de copies sera générées par le séquenceur. Les lectures peuvent donc être redondantes.

**Multiplexage:** rassembler plusieurs librairies dans un seul séquençage. Dans un séquençage multiplexé, les séquences *code-barres* sont ajoutés à chaque fragment ADN de chaque librairie de telle sorte que chaque *lecture* puisse être identifiée à son échantillon d'origine lors de l'analyse bioinformatique.

</div>