+++
template = "page.html"
title = "Multi Dimensional Scaling"
date =  2022-04-03
draft = false
description = "Example case of MDS on genotypes"
[taxonomies]
tags = ["data-science"]
+++



blabla PCA
<!-- more -->


## Distance between genotypes

### Data set

We work on a collection of 10 tetraploid genotypes and 10,000 SNPs.

### Dissimilarity Matrix

A **dissimilarity matrix** is a table that shows the distance between pairs of vectors. Here our vectors are genotypes observed on 10,000 SNPs. We use Manhattan measure to compute distances between genotypes. We observe 5 classes of genotypes 0,1,2,3,4. For a given pair of observed
genotypes, the maximum distance is 4 - 0 = 4 and the minimum distance is 0.

$$
\text{Manathan}:  \sum_{i} |v_i - w_i|
$$

### Multi dimensional scaling

We want to visualize genotypes distance in the dissimilarity matrices as a set of geometry points. Here the
term *distance* is standing for *measure of dissimilarity*. We want to project our manhattan distances in an
euclidian space of 2 dimensions. We use classic **multi dimensional scaling** to produce 2D-coordinates
from manhattan distance values.


Given distances dij
* Find positions (xij , yij )
* With maximum dimension of the space which the data are to be represented in k = 2
* That minimize a stress function

