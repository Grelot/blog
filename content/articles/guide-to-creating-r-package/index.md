+++
template = "page.html"
title = "Step-by-Step Guide to Creating R packages"
date =  2019-03-30
draft = false
description= "How to create an R package with Rstudio and devtools."
[taxonomies]
tags = ["tech"]
+++

## Introduction

In R, the fundamental unit of shareable code is the package. A package bundles together code, data, documentation, and tests, and is easy to share with others. As of June 2019, there were over 14,000 packages available on the Comprehensive R Archive Network, or CRAN, the public clearing house for R packages. In this article I describe how to create a R package step-by-step so that others can easily download and use your code.

<div style="background: #f1f1f1; ">

*"In R, the fundamental unit of shareable code is the package. A package bundles together code, data, documentation, and tests, and is easy to share with others."* Hadley Wickham

</div>


## Prerequisites

### Softwares

* [R](https://www.r-project.org/)
* [Rstudio](https://rstudio.com/)
* [git](https://git-scm.com/)

### R packages

* roxygen2
* devtools
* usethis

## Host your package on github

To register your package on CRAN or bioconductor can be long and requires your project to be mature enough. You can still share your project with project by hosting it on github.

1) Sign up/in to [github](https://github.com/) and **create a new repository**.
2) Check the `github repository address` on the github quick set up page.
3) On Rstudio open a new project as `new folder` `R package`. Activate the `use git` option. This will create a ready-to-use empty R package.
4) Connect your local R package to the github repository. Go to `terminal` in Rstudio and type:
```
git init
git add .
git commit -m "init R package"
git remote add origin <github repository address>
git push origin master
```
5) That's it ! Your R package is hosted as an online github repository

## Create Package Framework


We need to create a directory for our package. We can do this in one line of code, using the devtools create function. In terminal run:

```
devtools::create("mon_premier_package")
```

This automatically creates the bare bone files and directories needed to define our R package called `mon_premier_package`.

```
mon_premier_package
├── R
├── man
├── mon_premier_package.Rproj
├── DESCRIPTION
├── NAMESPACE
```

*  `R` folder will eventually contain our R code.
* `man` folder will eventually contain documentation.
* `mon_premier_package.Rproj` file is specific to the RStudio IDE.
* `DESCRIPTION` folder holds our package’s metadata.
* `NAMSPACE` is a file that ensures our library plays nicely with others, and is more of a CRAN requirement.


## Build the package

In Rstudio, click on `Check` then `Install and restart`. These commands will automatically install your package. Alternatively, you can run these commands  from the terminal:

```
devtools::check()
devtools::install()
```

Then your package is ready-to-use and available. It can be installed in any R session with devtools using `install_github` function:

```
if (!requireNamespace("devtools", quietly = TRUE)) { install.packages("devtools") }
library(devtools)
devtools::install_github("Pierre/mon_premier_package")
library(mon_premier_package)
```

Now you can share the skeleton of your package to anybody, so let's add muscle and skin to it.


## Add Functions

### Write R file in R Folder

Our package wouldn’t do much without functions. Let’s add a function. Here the R file `hello_world.R` contains the code source for the function `hellow_world`:

```
#' @title Say Hello
#'
#' @description Creates a string with hello word
#'
#' @param name A string
#' @return a string
#' @export
#' @example

hello_world <- function(name) {
    res <- "hello "+name
    return(res)
}
```
* Lines beginning with a `#'` are mandatory to generate **documentation** describing the function.
* We have to add our function to the `R` folder, since this is where R looks for any functions inside a library.

<pre>
mon_premier_package
<b>├── R
    ├── hello_world.R</b>
├── mon_premier_package.Rproj
├── DESCRIPTION
├── NAMESPACE
</pre>

### Add documentation

To create **documentation** describing your function.

```
devtools::document()
roxygen2::roxygenize()
```

This will generate a `man` folder and `.Rd` documentation files describing functions in `R` folder.

<pre>
mon_premier_package
├── R
    ├── hello_world.R
<b>├── man
    ├── hello_world.Rd </b>
├── mon_premier_package.Rproj
├── DESCRIPTION
├── NAMESPACE
</pre>

## Continuous integration with travis

[![Build Status](https://api.travis-ci.com/travis-ci/travis-web.svg?branch=master)](https://docs.travis-ci.com/user/status-images/)


The idea behind continuous integration is that CI will automatically run R CMD `check` (along with your tests, etc.) every time you push a commit to GitHub. CI automatically checks the code after every commit and return you if the build is a succes or not. See [blog post by Julia Silge](https://juliasilge.com/blog/beginners-guide-to-travis/) for a beginner's guide to Travis-CI for R.


## Conclusion


Here we learnt how to quickly build a R package. Creating R package is a critical skill for any scientist, and something I encourage others to do regularly. Package help isolate our work inside useful abstractions, improves reproducibility, makes our work shareable, and is the first step towards designing better software.

## References

- Book on R packages ([Hadley Wickham](http://r-pkgs.had.co.nz/))
- Presentation on R packages ([Nina Schiett](https://github.com/nschiett/rladies_package_workshop_2020))
- Guidebook to git and GitHub ([Jenny Bryan](https://happygitwithr.com/))
- Beginners guide to travis ([Julia Silge](https://juliasilge.com/blog/beginners-guide-to-travis/))