+++
template = "page.html"
title = "OBITools: processing DNA metabarcoding data"
date =  2020-06-27
draft = false
description= "All the information needed to process metabarcoding data using OBITools software."
[taxonomies]
tags = ["omics", "tech"]
+++




The [OBITools](https://doi.org/10.1111/1755-0998.12428) software is a set of tools specifically designed for processing Next Generation Sequencing data in a DNA metabarcoding context, taking into account taxonomic information. <!-- more -->They are distributed as an open source software available on the following website: http://metabarcoding.org/obitools.



## Data description: a bit of biology

<img align="right" width="360rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/1024px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png">


Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic information for development of all living organisms.


* DNA molecules are composed of four nucleotides:
  * <font color="red">thymine (T)</font>
  * <font color="green">adenine (A)</font>
  * <font color="orange">cytosine (C)</font>
  * <font color="blue">guanine (G)</font>  
* Thymine and adenine are complementary: <font color="red">T</font>==<font color="green">A</font>
* Cytosine and guanine are complementary: <font color="orange">C</font>==<font color="blue">G</font>
* Each strand of the double helix can be described as a sequence of nucleotides (*e.g.* ATTCGCT)
* One strand is the reversed complementary version of the second one (*e.g.* AGCGAAT is the reverse complementary sequence of ATTCGCT)
* *Sense* of a DNA strand can be:
   * positive (+) "sense strand" from 5' to 3'
   * negative (-) "antisense strand" from 3' to 5'
* The 5'-end designates the end of the DNA strand that has the fifth carbon in the sugar-ring of the deoxyribose or ribose at its terminus.
* The 3'-end designates the end of the DNA strand that has the hydroxyl group of the third carbon in the sugar-ring free, and is known as the tail end.


By convention, we write and read a DNA sequence from 5' to 3'. To describe a whole DNA molecule, we write the sequence of the positive sense strand (the negative antisense strand sequence can be deduced from the positive sense sequence as it is the reverse complementary).

## Metabarcoding context

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

For FAST Alignment. Universal format to describe DNA sequences.


<pre>
>ID1 ; a fish
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
ATCGAAAAAGGGTAAATAAAAG
GGTAAA​
</pre>


  * The row starting with a `>` indicates information related to the DNA sequence. ID of the sequence `ID1`. Relative information `a fish`
  * The sequence is splitted into row of 80 characters and a jumpline marks the end of the sequence.
A FASTA file can stores many sequences. These sequences are generally aligned.

</div>
<br>
<div style="background: #f1f1f1 ;">

### FASTQ files



FASTQ stands for FASTA Quality. They are raw data produced by sequencing instrument. Each sequence is a *read*. For each DNA sequence, a quality of sequencing sequence is associated.

<pre>
@HISEQ:250:CADV5ANXX:5:1101:1832:1959 1:N:0:ATCACGATTCTTTCCC
TCAACTACGCCTTCCGGTACACTTACCATGTTACGACTTGCCTCCCCTCGTCAGCGCTT
+
#?ABBFBFFFAFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFB
</pre>


  * First row: Information. Name of instrument (HISEQ). Run ID (250). Flowcell ID (CADV5ANXX). Flowcell lane (5). Lane's tile (1101). Coordinates x,y (1832:1959). Wether the read is a backward(2) or forward(1) in a paired-end read or a single-end read(0). N/Y If Y the read must be removed according to quality check of sequencing instrument. No supplementary check (0) HISEQ. Barcode/index/tag of read.
  * Second row: DNA sequence
  * Third row: delimiter
  * Last row: quality scores are encoded into a compact form, which uses only 1 byte per quality value. In this encoding, the quality score is represented as the character with an ASCII code equal to its value + 33. For instance **F** corresponds to value 70-33=37. Phred-scaled quality scores are used to represent how confident we are in the assignment of each base call by the sequencer. The Phred quality score _Q_ is logarithmically related to the error probability _E_. 
  
  _Q_ = -10 \log(_E_)

Here is a table of how to interpret a range of Phred Quality Scores. 

| Phred Quality Score | Error  | Accuracy (1 - Error) | 
| ------------------- | ------ | -------------------- |
| 10                  | 10%    | 90%                  |
| 20                  | 1%     | 99%                  |
| 30                  | 0.1%   | 99.9%                |
| 40                  | 0.01%  | 99.99%               |    

__________________________
</div>

## Metabarcoding data processing workflow

Metabarcoding data to process are FASTQ files. 

Structure of a DNA fragment is as follow:

`5' [TAG] [PRIMER 5'] [BARCODE] [PRIMER 3'] [TAG] 3'`

* `TAG`: a sequence of 8 nucleotides which indicates the original sample of the DNA fragment.
* `PRIMER`: a sequence used in the PCR technique. In the PCR method, a pair of primers is used to hybridize with the sample DNA and define the region of the DNA that will be amplified. In metabarcoding context, the PCR aims to amplify taxonomic group we want to target using a given primer.
* `BARCODE`: a hypervariable sequence which permits to identify taxonomic levels (order, class, species...). In metabarcoding context this is our sequence of interest. We want to isolate this sequence in order to detect species in a given sample.

We sequenced each DNA fragment as paired-end meaning from both extremities:

* possible forward reads (depends on wether sens or antisens brand is replicated)
  * `5' [forward TAG] [forward PRIMER 5'] [BARCODE] 3'`
  * `5' [reverse TAG] [reverse PRIMER 5'] [BARCODE] 3'`

* possible reverse reads (depends on wether sens or antisens brand is replicated)
  * `5' [reverse TAG] [reverse PRIMER 3'] [BARCODE] 3'`
  * `5' [foward TAG] [forward PRIMER 3'] [BARCODE] 3'`


Our aims will be to reconstitute the original DNA fragment sequence from forward and reverse reads and then to isolate, filter and cluster barcode sequences. Then a taxon will be assigned to each barcode allowing detection of species in samples.
_______________________________________________________________________________

<img align="right" width="480rem" src="https://gitlab.mbb.univ-montp2.fr/edna/snakemake_only_obitools/-/raw/master/schema_only_obitools.png">


### 1. Assemble reads

`illuminapairedend` aligns and merges the forward and the reverse reads of a couple of paired-end sequences. When the two reads overlap with a high alignment quality score, the consensus sequence is produced.

### 2. Demultiplexing

Multiplex sequencing is a technology to sequence multiple samples at the same time on a high-throughput DNA sequencer. Samples are distinguished by the short prefix of a DNA sequence called DNA *tag*. The demultiplex step consists to assign to each DNA sequence its original sample.

`ngsfilter` seeks for *tag* and *primer* sequences in both 5' and 3' direction of each consensus sequence. The primers and tags sequences are removed and annotations about the corresponding sample is added as new attributes.

### 3. Filtering and clustering

Identical barcode sequences are clustered using `obiuniq`. Then barcode sequences with a low depth coverage (meaning PCR amplification didn't work on the corresponding DNA fragment during sequencing so probably an error of sequencing) are removed using `obigrep`. Also, barcode sequences with a mean low quality phred-score are removed.

`obiclean` annotates the barcode sequences with the tags *head*, *internal* or *singleton*. The tag head corresponds to sequences that possess variant sequences in the dataset without being the variant of another record. Their variants are tagged as internal. The remaining sequences are annotated with the tag singleton. A variant must be related to the head sequence record with a number of differences in the alignment under a threshold value and is defined by a ratio between its count and the count of the head sequence which must be lower than a value fixed between 0 and 1. The command `obigrep` is then used to get rid of internal sequences.

### 4. Reference database

The reference database is a set of barcode sequences representative of taxon group such as species. Each taxon is located on the NCBI tree of life.

Here the strategy to build a reference database for metabarcoding:

* Download DNA sequences from known species. These sequences are mitochondrial genes (*e.g.* 12S or 16S for teleostei taxon group)
* Design a primer sequence able to target taxon group of interest
* `ecopcr` is a software that simulates a PCR digestion *in silico*. So we use the primer to extract the barcode sequences.
* Then we use the [NCBI taxonomy](ftp://ftp.ncbi.nih.gov/pub/taxonomy/taxdump.tar.gz) to assign to each barcode sequences a node of the tree of life.

### 5. Taxonomic assignment

`ecotag` associate the barcode sequences with taxonomic information from the reference database. It compares the record to the sequences of the provided reference database and assign the most similar one when the similarity reaches a fixed threshold. The command annotates the sequence records with the following attributes:  the sequence of the reference database that matches best, the score of identity, a unique integer taxid often referring to one taxon in the NCBI taxonomy and the scientific name linked to the taxid integer. It allows to identify the most recent common ancestor of each sequence.

### 6. Format table

Some unuseful attributes are removed. The barcode sequences are sorted by decreasing order of count. Finally, a tab-delimited file that can be open by excel or R is generated. The table is a matrix with row as barcode sequences cluster and colon as sample abundance. Taxonomic assignment for each barcode sequence is mentionned.

## Conclusion

Thanks to OBItools we were able to process eDNA raw sequencing data in order to detect species among samples. First, DNA fragments are merged, then demultiplexed (each sequence is assigned to its original sample). Third, sequence barcodes are extracted, filtered and clustered by similarity. Then a taxon is assigned to each barcode sequences. Ultimately, a table of environmental presence of each species abundance among samples is produced allowing further analysis.


## References

* **Blind assessment of vertebrate taxonomic diversity across spatial scales by clustering environmental DNA metabarcoding sequences** ([Ecography Journal in 2020](https://doi.org/10.1111/ecog.05049))
* **OBItools: a unix‐inspired software package for DNA metabarcoding** ([Molecular Ecology Resources in 2016](https://doi.org/10.1111/1755-0998.12428))
