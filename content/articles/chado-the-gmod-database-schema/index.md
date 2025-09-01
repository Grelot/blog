+++
template = "page.html"
title = "Chado: the GMOD Database Schema"
date =  2025-01-18
draft = false
description="Chado is a modular schema for handling all kinds of biological data."
[taxonomies]
tags = ["data-engineering"]
+++


**Chado** is a relational database schema that underlies many GMOD installations. It is capable of representing many of the general classes of data frequently encountered in modern biology such as sequence, sequence comparisons, phenotypes, genotypes, ontologies, publications, and phylogeny. It has been designed to handle complex representations of biological knowledge and is the most sophisticated relational schemas currently available in molecular biology.

<!-- more -->

<div class="encart_inside_article">

## GMOD

The [Generic Model Organism Database](https://gmod.org/) project or GMOD is a collection of open source software tools for managing, visualising, storing, and disseminating genetic and genomic data.

GMOD includes software such as:

* [JBrowse](https://gmod.org/wiki/JBrowse.1): Super-fast genome annotation viewer
* [Galaxy Project](https://gmod.org/wiki/Galaxy.1): Data analysis and integration
* [Tripal](https://gmod.org/wiki/Tripal.1): Chado web interface
* [MAKER](https://gmod.org/wiki/MAKER.1): Genome annotation pipeline
* [CMap](https://gmod.org/wiki/CMap.1): Comparative map viewer
* [Pathway Tools](https://gmod.org/wiki/Pathway_Tools.1): Metabolic, regulatory pathways
* [Canto](https://gmod.org/wiki/Canto): Literature annotation tool


All these tools use Chado as an underlying database schema.
</div>


## 

## References

* Github repo Chado: [GMOD/Chado](https://github.com/GMOD/Chado)
* Documentation: [GMOD](https://gmod.org/)
* Introduction to Chado: [wiki Chado](https://gmod.org/wiki/Introduction_to_Chado)

> **Chado use case: storing genomic, genetic and breeding data of Rosaceae and Gossypium crops in Chado**
>
> *Sook Jung, Taein Lee, Stephen Ficklin, Jing Yu, Chun-Huai Cheng, Dorrie Main*
>
> The Journal of Biological Databases and Curation, March 2016. DOI: [10.1093/database/baw010](https://doi.org/10.1093/database/baw010)

> **A Chado case study: an ontology-based modular schema for representing genome-associated biological information**
>
> *Christopher Mungall and David Emmert*
>
> Bioinformatics, July 2007. DOI: [10.1093/bioinformatics/btm189](https://doi.org/10.1093/bioinformatics/btm189)

> **The FlyBase database of the Drosophila genome projects and community literature**
>
> *The FlyBase Consortium*
>
> Nucleic Acids Research, January 2003. DOI: [10.1093/nar/gkg094](https://doi.org/10.1093/nar/gkg094)