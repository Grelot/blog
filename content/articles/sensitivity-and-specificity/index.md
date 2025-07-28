+++
template = "page.html"
title = "Sensitivity and Specificity"
date =  2015-04-06
draft = false
description = "ROC curve"
[taxonomies]
tags = ["data-sciences"]
+++

How do we know if a test or classifier is reliable? In both medicine and machine learning, classifier are used to attribute a class to an input data. Therefore, *performance metrics* are necessary to assess the reliability of the resulting classification. <!-- more -->They help answer questions like:
* How often does the test correctly identify the true class?
* How often does the test mistakenly identify the wrong class?


## On the Origin of Sensitivity and Specificity

Originally, sensitivity and specificity were *qualities* of a biological test used in chemistry, serology and immunology.

* **Sensitivity** measured how reactive a test was *e.i.* ability to detect minute quantities of the target antigen.
* **Specificity** measured how selective a test was *e.i.* ability to react exclusively with the target antigen and not with unrelated molecules.

Later, in clinical epidemiology, Jacob Yerushalmy in 1947 introduced sensitivity and specificity as *probabilities* to assess reliability of diagnoses in radiology.

* **A measure of sensitivity** or the probability of correct diagnosis of *positive* cases
* **A measure of specificity** or the probability of correct diagnosis of *negative* cases

Today, sensitivy and specificity are used as *metrics* beyond medecine, in data science and maching learning. They evaluate the performance of **binary classifiers**.

## Binary Classifier

One can consider the medical diagnoses as **binary classifier**. A **classifier** is a process that takes input data and assigns it to a class. Such classifier is **binary** when it can only choose between two possible classes.

For instance, the diagnosis based on X-ray data only produce two possible outputs: `Positive` or `Negative`.

| input X-ray data | diagnosis |
| --- | --- |
| case 1 | `Positive` |
| case 2 | `Negative` |
| case 3 | `Positive` |
| case 4 | `Positive` |
| case 5 | `Negative` |


## The Confusion Matrix

The **confusion matrix** is a table that compares classifier's prediction with the observed class.

| | Predicted `Positive` | Predicted `Negative` |
| --- |--- | --- |
| **Observed `Positive`** | :white_check_mark: True Positive (TP) | :x: False Negative (FN) |
| **Observed `Negative`** | :x: False Positive (FP) | :white_check_mark: True Negative (TN) |


* :white_check_mark: **True Positive (TP):** The classifier correctly predicted a positive outcome, the observed outcome was positive.
* :white_check_mark: **True Negative (TN):** The classifier correctly predicted a negative outcome, the observed outcome was negative.
* :x: **False Positive (FP):** The classifier incorrectly predicted a positive outcome, the observed outcome was negative. It is also known as a Type I error.
* :x: **False Negative (FN):** The classifier incorrectly predicted a negative outcome, the observed outcome was positive. It is also known as a Type II error.


## Sensitivity

The **sensitivity** is the ratio of observed `positive` cases, correctly predicted by the test.

$$
\text{Sensitivity} = \frac{TP}{TP + FN}
$$

## Specificity

The **specificity** is the ratio of observed `negative` cases, correctly predicted by the test.

$$
\text{Specificity} = \frac{TN}{TN + FP}
$$

## Accuracy

The **accuracy** is how often the test correctly predicted the outcome for both `positive` and `negative` cases.

$$
\text{Accuracy} = \frac{TP + TN }{TN + TN + FP + FN}
$$

Accuracy can be expressed as the weighted mean of sensitivity and specificity, weighted by the number of observed `positive` and `negative` cases.

$$
\text{Accuracy} = \frac{P ⋅ Sensitivity + N ⋅ Specificity }{P + N}
$$


## Precision

The **precision** or Positive Predictive Value is the ratio of correctly predicted `positive` cases.

$$
\text{Accuracy} = \frac{TP}{TP + FP}
$$


## Type I Error

The Type I Error or **False Positive Rate** impacts the precision of a test. It is the ratio of observed `negative` cases that the test failed to detect.


$$
\text{False Positive Rate} = \frac{FP}{FP + TN}
$$


False Positive Rate can be expressed with specificity:

$$
\text{False Positive Rate} = {1 - Specificity}
$$


## Type II error

The Type II Error or **False Negative Rate** impacts the sensitivity of a test. It is the ratio of observed `positive` cases that the test failed to detect.


$$
\text{False Negative Rate} = \frac{FN}{FN + TP}
$$


False Negative Rate can be expressed with sensitivity:

$$
\text{False Negative Rate} = {1 - Sensitivity}
$$

## 




## References

> **Statistical Problems in Assessing Methods of Medical Diagnosis, with Special Reference to X-Ray Techniques**
>
> *Jacob Yerushalmy*
>
> Public health reports. 1947 October 03. DOI: [10.2307/4586294](https://doi.org/10.2307/4586294)

> **On the Origin of Sensitivity and Specificity**
>
> *Nicholas Binney, Christopher Hyde, and Patrick M. Bossuyt*
>
> Annals of Internal Medecine. 2021 March 16. DOI: [10.7326/M20-5028](https://doi.org/10.7326/M20-5028)


> **ORION : a web server for protein fold recognition and structure prediction using evolutionary hybrid profiles**
>
> *Yassine Ghouzam, Guillaume Postic, Pierre-Edouard Guerin, Alexandre G. de Brevern & Jean-Christophe Gelly* 
>
> Scientific Reports. 2016 Jun 20. DOI: [10.1038/srep28268](https://doi.org/10.1038/srep28268)