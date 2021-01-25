+++
template = "page.html"
title = "Curriculum Vitae"
date =  2019-08-20
draft = false
tags = ["resume"]
+++


## Contact

* **Mail:** <a href="mailto:pierre.edouard.guerin@gmail.com"> pierre.edouard.guerin [at] gmail.com</a>
* **Phone:** (+33) 04 67 61 32 35



## Experience

<div class="timeline-item" date-is='Feb 2017 to present'>
		<h3>Software Development engineer (Bioinformatics)</h3>
        <h6>CNRS UMR 5175, Center of Functional Ecology and Evolution, Montpellier</h6> 
		<p>            
			I develop softwares for the analysis and visualization of data from high-throughput DNA sequencing (genomics, metagenomics, environmental DNA). I also ensure technology watch to implement new data processing methods and optimize scientific reproducibility.
        </p> 
            <mark>python</mark>            
            <mark>R</mark>
            <mark>C++</mark>
            <mark>Singularity</mark>
            <mark>Docker</mark>
            <mark>SGE</mark>
            <mark>SLURM</mark>
            <mark>Snakemake</mark>
            <mark>Nextflow</mark>
            <mark>Jupyter notebook</mark>
	</div>	
	<div class="timeline-item" date-is='Jan to Aug 2016'>
		<h3>Bioinformatics engineer internship</h3>
        <h6>INSERM UMR S598, Genetics of Diabetes, Paris</h6>
		<p>
			I developed and integrated a functionnality and its graphical interface to a medical software. It aims to detect and annotate rare genetic variants related to diabetes on human genome sequence data.
		</p>
            <mark>python</mark>            
            <mark>Qt</mark>
            <mark>mySQL</mark>
            <mark>Docker</mark>
	</div>	
	<div class="timeline-item" date-is='Feb to June 2015'>
		<h3>Bioinformatics engineer internship</h3>
        <h6>INSERM UMR S1134, Dynamics of Structures and Interactions of Macromolecules in Biology, Paris</h6>
		<p>
			Implementation of an algorithm to predict 3D-modelisation of protein structure at atomic resolution.
		</p>
            <mark>C</mark>            
            <mark>C++</mark>
            <mark>postgreSQL</mark>
            <mark>HTML</mark>
            <mark>CSS</mark>
            <mark>Javascript</mark>
	</div>
	
## Education

* **2016: M.Sc. in Bioinformatics**, Université Paris Diderot, France
* **2014: Licence in Bioinformatics**, Université Paris Diderot, France

_______________________________________________________________________________

# Projects

<div class="all_proj">

<div role="button" class="project" onclick="location.href='https://gitlab.mbb.univ-montp2.fr/reservebenefit/snakemake_stacks2'">
<img align="center" width="48rem" height="48rem" src="reservebenefit.png">
<div class="title">Population genomics</div>
<div class="description">I genotyped 1200 individuals belonging to 3 fish species. I worked with restriction enzyme-based data such as RAD-seq.</div>
<div class="skills"> (illumina paired-end, STACKS, vcftools, bedtools, bwa, python, snakemake, singularity, Univa Grid Engine, bash)</div>
<hr width="31%"> 
<div class="duration"> From april 2017 to december 2018 </div>
</div>

<div role="button" class="project" onclick="location.href='https://github.com/lmathon/eDNA--benchmark_pipelines'">
<img align="center" width="114rem" height="48rem" src="spygen.png">
<div class="title">Benchmarking of metabarcoding workflows</div>
<div class="description">I did a modularized workflow in order to process metabarcoding data with different combination of softwares. Then we designed the workflow with the best performances.</div>
<div class="skills"> (obitools, vsearch, cutadapt, bash, python, singularity, Univa Grid Engine)</div>
<hr width="31%"> 
<div class="duration"> From februrary 2019 to march 2020 </div>
</div>

<div role="button" class="project" onclick="location.href='https://github.com/Grelot/global_fish_genetic_diversity'">
<img align="center" width="224rem" height="48rem" src="ephe.png">
<div class="title">First Global Map of Fish Genetic Diversity</div>
<div class="description"> I built a database containing over 50,000 DNA sequences representing 3,815 species of marine fish and 1,611 species of freshwater fish. I estimated the average genetic diversity at different geographical scales.</div>
<div class="skills"> (julia, python, R, singularity, MUSCLE, UGENE, geonames, BOLD, shiny)</div>
<hr width="31%"> 
<div class="duration"> From may 2017 to february 2020 </div>
</div>

<div role="button" class="project" onclick="location.href='https://github.com/Grelot/genbar2'">
<img align="center" width="48rem" height="48rem" src="cnrs.png">
<div class="title">Genbar 2</div>
<div class="description"> I programmed a software to identify genetic boundaries between populations from individual spatial coordinates and genetic variants data.</div>
<div class="skills"> (C, C++, htslib)</div>
<hr width="31%"> 
<div class="duration"> From may 2017 to february 2020 </div>
</div>


<div role="button" class="project" onclick="location.href='https://gitlab.mbb.univ-montp2.fr/reservebenefit/genomic_resources_for_med_fishes'">
<img align="center" width="48rem" height="48rem" src="reservebenefit.png">
<div class="title">Genome assembly</div>
<div class="description">I did the sequencing and assembly of 3 new fish species nuclear and mitochondrial genomes.</div>
<div class="skills"> (illumina paired-end, mate-pair, 10X genomics chromium, Abyss, Platanus, QUAST, SLURM, bash)</div>
<hr width="31%"> 
<div class="duration"> From January 2017 to Novembrer 2019 </div>
</div>
<div role="button" class="project" onclick="location.href='https://gitlab.mbb.univ-montp2.fr/edna'">
<img align="center" width="128rem" height="48rem" src="monaco.png">
<div class="title">Metabarcoding</div>
<div class="description">I programmed several workflow to process metabarcoding environmental DNA data from MONACO MARINE WORLDWIDE EXPEDITION.</div>
<div class="skills"> (obitools, vsearch, swarm, cutadapt, bash, python, singularity, snakemake)</div>
<hr width="31%"> 
<div class="duration"> From march 2018 to present </div>
</div>


<div role="button" class="project" onclick="location.href='https://gitlab.mbb.univ-montp2.fr/seaconnect'">
<img align="center" width="136rem" height="48rem" src="total.png">
<div class="title">Landscape genomics</div>
<div class="description">I processed low-coverage RAD-seq data from 1800 individuals belonging to 2 fish species collected from all over the Mediterranean sea.</div>
<div class="skills"> (dDocent, freebayes, vcftools, samtools, trimmomatic, bash, python, singularity, snakemake)</div>
<hr width="31%"> 
<div class="duration"> From june 2017 to present </div>
</div>

<div role="button" class="project" onclick="location.href='https://github.com/Grelot/aker--beetGenomeEnvironmentAssociation'">
<img align="center" width="48rem" height="48rem" src="florimond.png">
<div class="title">Beets genome metrics</div>
<div class="description">I calculated metrics (nucleotide diversity, Tajima's D) on the beets genome from 14,409 random single nucleotide polymorphisms (SNPs) among 299 accessions of cultivated beets.</div>
<div class="skills"> (R, python, genpop)</div>
<hr width="31%"> 
<div class="duration"> From may 2017 to may 2018 </div>
</div>


<div role="button" class="project" onclick="location.href='https://github.com/Grelot/diabetesGenetics--COAT'">
<img align="center" width="136rem" height="32rem" src="inserm.png">
<div class="title">Report bad quality region of coding sequences from genome sequencing data</div>
<div class="description">I developped a software able to detect human genomic variations with low coverage. Graphical Interface. </div>
<div class="skills"> (Illumina paired-end, samtools, bedtools, variation annotation, python, mySQL, qt4)</div>
<hr width="31%"> 
<div class="duration"> From january 2016 to july 2016 </div>
</div>

<div role="button" class="project" onclick="location.href='https://www.dsimb.inserm.fr/orion/'">
<img align="center" width="136rem" height="32rem" src="inserm.png">
<div class="title">Optimization of a method of fold recognition in protein structure</div>
<div class="description">I added a new algorithm to predict 3D-modelisation of protein structure at atomic resolution </div>
<div class="skills"> (PDB, pymol, C, C++, python, R, html, css )</div>
<hr width="31%"> 
<div class="duration"> From february 2015 to june 2015 </div>
</div>

</div>


_______________________________________________________________________________
 

# Softwares

* **[WFGD](https://shiny.cefe.cnrs.fr/wfgd/)**(main contributor): interactive worldmap of fish genetic diversity.
* **[vcfsynonymous](https://github.com/Grelot/vcfsynonymous)**(main contributor): identify coding variant who are synonymous from annotated genome information and VCF.
* **[Rgeogendiv](https://github.com/Grelot/rgeogendiv)**(main contributor): R package for downloading, preparing and aligning georeferenced DNA sequences on Genbank to calculate genetic diversity at different geographical scales 
* **[Workflow to process environmental DNA sequencing data](https://gitlab.mbb.univ-montp2.fr/edna)**(main contributor, maintainer): this workflow is open-source and it is used by SPYGEN company, IFREMER, ETH Zurich and the marine explorations of Monaco.
* **[Workflow to genotype reduced genome sequencing data](https://gitlab.mbb.univ-montp2.fr/reservebenefit/snakemake_stacks2)**(main contributor): this workflow processed over 3000 fish genomes in the context of the european project RESERVEBENEFIT in collaboration with Helmholtz-Zentrum für Ozeanforschung Kiel and Instituto Español de Oceanografía.
* **[Genbar2](https://github.com/Grelot/genbar2)**(main contributor): identify genetic boundaries between populations using individual spatial coordinates and genetic variants.
* **[DEMORT](https://pypi.org/project/demort/)**(main contributor): a DEmultiplexing MOnitoring Report Tool
* **[EXAM](https://sourceforge.net/projects/exam-exome-analysis-and-mining/)**(contributor): a whole exome sequencing analysis and its graphical interface
* **[ORION](http://www.dsimb.inserm.fr/ORION/)**(contributor): a sensivitve method for protein template detection


_______________________________________________________________________________



# Publications


* **Blind assessment of vertebrate taxonomic diversity across spatial scales by clustering environmental DNA metabarcoding sequences** ([Ecography Journal in august 2020](https://doi.org/10.1111/ecog.05049))
* **New genomic ressources for three exploited Mediterranean fishes** ([Genomics in july 2020](https://doi.org/10.1016/j.ygeno.2020.06.041))
* **Global determinants of freshwater and marine fish genetic diversity** ([Nature Communications in february 2020](https://www.nature.com/articles/s41467-020-14409-7))
* **Predicting genotype environmental range from genome–environment associations** ([Molecular Ecology in may 2018](https://doi.org/10.1111/mec.14723))
* **ORION : a web server for protein fold recognition and structure prediction using evolutionary hybrid profiles** ([Scientific Reports in june 2016](https://doi.org/10.1038/srep28268))




_______________________________________________________________________________

# Other activities


## Sciences

* My scientific [blog](https://guerinpe.com/articles/)
* Member of the association of Young French Bioinformaticians [Jebif](https://jebif.fr/en/)
* Author on french bioinformatics participative blog [bioinfo-fr](https://bioinfo-fr.net/author/pierre-edouard-guerin)
* My [data science skills demo](https://github.com/Grelot/machine_learning_demo) *(linear regression, random forest, neural network, bayesian, deep learning)* using python ecosystem for machine learning *(pandas, numpy, tensorflow, scikit-learn)* training on [kaggle](https://www.kaggle.com/pierreedouardguerin).


## Personnal projects

<img align="right" width="60px" height="60px" src="costa_walk.png">

* **[speckyman](https://github.com/Grelot/speckyman)**: a platform game developed in JavaScript
* **[fromdnatomusic](https://github.com/Grelot/fromdnatomusic)**: convert DNA sequences into MIDI track and listen to it
* **[Nos data ont du talent](https://www.youtube.com/channel/UCvjBNumU6EvJiiGfxqNfd7Q)**: a youtube channel dedicated to data visualisation



## Triathlon


I'm an active member of the [USN-MONTPELLIER](https://www.usn-montpellier.fr/usn-web/view/index.php) sportive club since 2017. Join us !

<img align="center" width="264rem" height="247rem" src="usnm.png">


_______________________________________________________________________________



