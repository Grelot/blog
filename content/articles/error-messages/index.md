+++
template = "page.html"
title = "Error Messages with a CLI"
date =  2024-11-28
draft = false
description="cli formatting error messages"
[taxonomies]
tags = ["tech"]
+++

I am an anxious person. So **error messages** always makes my heart beat faster. Hopefully, following the [Pareto Principle](https://en.wikipedia.org/wiki/Pareto_principle), 80% of error messages are mild while 20% are the really tough one. The point is to solve the first kind as quickly as possible and effortless. To do so, allow the user to solve the issue by himself with clear messages and hints (in the case of errors related to input files or parameters). Clear presentation of the context and precise localization of the error in the code will save a lot of useless and tedious work to the developer. The time spared on the easy errors just by having better messages, then can be reallocated to the second kind of errors, the troublemakers.
<!-- more -->

```
An unknown error has occurred.
```
<small>

*The Ultimate Useless Error Message Ever!*

</small>

After spending a lot of time redesigning my R package error messages, I have developed good practices for writing helpful console error messages in a standardized way using CLI libraries.


## Writing Error Messages

### Problem Statement

* Explain exactly what went wrong.
  * :exclamation: **Warning**: the program continue running but something might be wrong.
  * :x: **Alert**: The program stopped because they are a *critical problem* that must be fixed.
* Only use one of these two verbs:
  * `must`: the problem is clearly identified.
  * `can not`: do not know the problem.
* Do not blame the user. Describe the problem and provide context.

### Error Location

* Indicate where in the code or system an error occurs. 
  * File name and line number.
  * Module and function.
* The :dolls: **Stack trace** is the list of calls leading up to the error. The last call indicate the exact error location.

It prevents you to search for hours where the bug occurs in your code.

### Error Hint

* :information_source: **Hint**: an info bullet to suggest a solution to the user.
* One bullet = one hint.


Example:

> :x: Your name `Claude63` must contain only letters.
>
> :information_source: Check your name does not include numbers.
>

### Punctuation

* Complete sentence.
* Singular form.
* A sentence must end with a period.


## Where to Write Error Messages in Code

### For simple program

For a simple script, just write the error message where it happens.

```
inversion <- function(number) {
  if (number != 0) {
    return(1 / number)
  } else {
    cat("ERROR: Number must be different than zero.")
    cat("INFO: Check that the value of 'number' is different from zero.")
    stop()
  }  
}
```

### For complex program

In complex program such as an R package (I keep this example but the same logic applies for C, java, python, etc.) **writing error messages directly in the code is not good.** 

* The more complex the program, the harder it becomes to modify error messages and keep them consistent over version and functions.
* Error messages are often redundants. Even if your code itself is not repetitive, your messages may be repeated in multiple places. It is harder to stay consistent because you must replicate by hand the same error message over and over in different context.
* Lengthy error messages in the middle of your code make it harder to read and review.

The solution is to make a **dictionnary of error messages**. In a dedicated file, for instance `error_messages.R`, write the complete list of error messages and their associated keys. Then in your code, call the needed error message by its key.

```
R/
├── error_messages.R
└── main.R
```
error_messages.R
```
error_messages$err001 = c(
    "ERROR: Number must be different than zero.",
    "INFO: Check that the value of 'number' is different from zero."    
    )
error_messages$err002 = ...
```
main.R
```
inversion <- function(number) {
  if (number != 0) {
    return(1 / number)
  } else {
    error_messages$err001
  }  
}
```

This way your code is shorter, cleaner and you can change all the error messages in a centralized way.

## Command Line Interfaces (CLI)

Last but not least, you need to use a dedicated Command Line Interfaces (CLI) for error messages. Still with the example of R, the package [`cli`](https://github.com/r-lib/cli) provide the tools to build structured messages.

* Error and warning messages formatting
* Generate stack track
* Text formatting
* Handle variables
* Word pluralizing

### Error and Warning messages Formatting

The following command display a default format for Success, alert, warning, hint type messages. It also automatically generate the stack track to localize the where the error occurs.
```
cli_alert_success("Success.")
cli_alert_danger("Alert.")
cli_alert_warning("Warning.")
cli_alert_info("Hint.")
```

### Stack Track

```
cli_abort(message = "Abort.")
```


### Text Formatting

```
cli_h1("Heading 1")
cli_h2("Heading 2")
cli_li("Item 1")
cli_li("Item 2")
```

### Using Variable

```
fruits <- c("banana", "orange", "strawberry")
cli_alert_success("Recorded {length(user_names)} fruits.")
```

### Pluralize words

```
n_files = 3
n_dirs = 1
cli_alert_info("Found {n_files} file{?s} and {n_dirs} director{?y/ies}.")
```

## Dictionnary of error messages combined with `cli`

```
R/
├── error_messages.R
└── main.R
```
error_messages.R
```
error_messages$err001 =
  c(
    "x" = "{.field number} must be different from zero.",
    "i" = "The value of {.field number} is {.val {number}}.",
    ">" = "Check {.field number} is not zero."
  )

error_messages$err002 = ...
```
main.R
```
inversion <- function(number) {
  if (number != 0) {
    return(1 / number)
  } else {
    cli_abort(error_messages$err001)
  }  
}
```

## CLI Libraries in Other Languages

* **Python**: [Click](https://click.palletsprojects.com/en/stable/why/)
* **C++**: [fmt](https://github.com/fmtlib/fmt)
* **Php**: [Symfony CLI](https://symfony.com/doc/current/components/console.html)
* **Java**: [Picocli](https://picocli.info/)

## Conclusion

* Use short and consistent style and format.
* Trace back and description of context is mandatory.
* Use a dictionnary of error messages to centralize them and lighten your code.
* Use CLI libraries to help you write formatted and standardized error messages.


## References

* R package `cli`: [r-lib/cli](https://github.com/r-lib/cli)
* Documentation: [R package cli doc](https://cli.r-lib.org/reference/index.html)


