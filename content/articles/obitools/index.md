+++
template = "page.html"
title = "OBITools: processing DNA metabarcoding data"
date =  2020-09-19
draft = false
description= "All the information needed to process metabarcoding data using OBITools software."
[taxonomies]
tags = ["omics", "tech"]
+++



## Introduction

[OBITools](https://doi.org/10.1111/1755-0998.12428) is a 



<img align="right" width="360rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/1024px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png">

## Data description: a bit of biological context


Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic information for development of all living organisms.


* DNA molecules are composed of four nucleotides:
  * <p style="color:red">thymine (T)</p>
  * <p style="color:green">adenine (A)</p>
  * <p style="color:orange">cytosine (C)</p>
  * <p style="color:blue">guanine (G)</p>  
* Thymine and adenine are complementary: <strong style="color:red">T</strong>==<strong style="color:green">A</strong>
* Cytosine and guanine are complementary: <strong style="color:orange">C</strong>==<strong style="color:blue">G</strong>
* Each strand of the double helix can be described as a sequence of nucleotides (*e.g.* **ATTCGCT**)
* One strand is the reversed complementary version of the second one (*e.g.* **AGCGAAT** is the reverse complementary sequence of **ATTCGCT**)
* *Sense* of a DNA strand can be:
   * positive (**+**) "sense strand" from **5'** to **3'**
   * negative (**-**) "antisense strand" from **3'** to **5'**
* The **5'**-end designates the end of the DNA strand that has the fifth carbon in the sugar-ring of the deoxyribose or ribose at its terminus.
* The **3'**-end designates the end of the DNA strand that has the hydroxyl group of the third carbon in the sugar-ring free, and is known as the tail end.


<img width="480rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/DNA_chemical_structure-1-.fr.svg/1024px-DNA_chemical_structure-1-.fr.svg.png?1601388990848">

By convention, we write and read a DNA sequence from 5' to 3'. To describe a whole DNA molecule, we write the sequence of the positive sense strand (the negative antisense strand sequence can be deduced from the positive sense sequence as it is the reverse complementary).

Determining the order of the nucleotides composing a DNA molecule is known as **DNA sequencing**. In metabarcoding context we want to target **barcode** sequence exclusively. Barcode are DNA sequence of gene from mitochondrion with the following property:

<pre>
conservative region         hypervariable region            conservative region

===================|||||||||||||||||||||||||||||||||||||||||===================
</pre>

The conservative region is typical of the taxonomic group we want to target (*e.g.* teleostei). The conservative region will be used as *primer* to initiate the PCR. The hypervariable region is the barcode sequence itself, it permits to identify at species level. In **metabarcoding**, barcode sequences from a sample are targeted and ampliflied by PCR using *primer*. Then the isolated DNA barcodes are pooled with barcode sequences from other samples. A tag sequence of 8 nucleotides is added to each DNA fragments from a given sample. So that it will be possible to assign the sample of a given DNA fragment in downstream analysis.


### Next generation sequencing

DNA sequencing is performed on the library of amplified DNA barcodes. The sequencing of illumina instrument is paired-end. Adaptors are annealed to the ends of DNA fragments. Fragments bind to primer-loaded flow cell and bridge PCR reactions amplify each bound fragment to produce clusters of fragments. During each sequencing cycle, one fluorophore attached nucleotide is added to the growing strands. Laser excites the fluorophores in all the fragments that are being sequenced and an optic scanner collects the signals from each fragment cluster. Then the sequencing terminator is removed and the next sequencing cycle starts.


The NGS technique produces millions of short sequences (typical read length of 125 bp)


<div style="background: #f1f1f1 ;">

### FASTA files

Pour FAST Alignment. Format informatique universel pour décrire des séquences.

```
>ID1 ; a fish
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
GGTAAA​
```
  * The row starting with a `>` indicates information related to the DNA sequence. ID of the sequence `ID1`. Relative information `a fish`
  * The sequence is splitted into row of 80 characters and a jumpline marks the end of the sequence.
Un fichier FASTA peut avoir plusieurs séquences qui typiquement sont alignées.

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
  * First row: Information. le nom de l’instrument (HISEQ). l’ID de la run (250). L’ID de la flowcell (CADV5ANXX). La lane de la flowcell (5). La tile de la lane de la flowcell (1101). La coordonnées x,y (1832:1959). Si le reads est un backward(2) ou forward(1) reads dans un paired-end ou alors un simple reads(0) dans un single-end. N/Y si Y le reads doit être éliminé selon le contrôle qualité du séquenceur. Pas de contrôle informatique supplémentaire (0) propre à HISEQ. Barcode/index/tag du reads (permet d’identifier l'échantillon d’origine à partir duquel l’ADN a été lu, en d’autres mots : l’échantillon auquel “appartient” le reads )
  * Second row: DNA sequence
  * Third row: symbole + entre la séquence de nucléotides et la séquence qualité
  * Last row: Quality. qualité de la résolution de chaque nucléotide de la séquence par le séquenceur. Il faut comprendre que chaque caractère a une valeur selon le code ASCII de 0 à 255. Par exemple le F c’est 70 et B c’est 66.


</div>

## Metabarcoding data processing workflow

Here, we describe the bioinformatics workflow used by [SPYGEN](http://www.spygen.com/) to generate species environmental presence from raw eDNA data. This workflow is based on OBItools.

<img align="right" width="520rem" src="https://gitlab.mbb.univ-montp2.fr/edna/snakemake_only_obitools/-/raw/master/schema_only_obitools.png">

### Assemble reads

test



## References

* **Blind assessment of vertebrate taxonomic diversity across spatial scales by clustering environmental DNA metabarcoding sequences** ([Ecography Journal in 2020](https://doi.org/10.1111/ecog.05049)))
* **OBItools: a unix‐inspired software package for DNA metabarcoding** ([Molecular Ecology Resources in 2016](https://doi.org/10.1111/1755-0998.12428))
