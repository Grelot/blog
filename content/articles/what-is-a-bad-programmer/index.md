+++
template = "page.html"
title = "What is a bad programmer?"
date =  2023-12-23
draft = false
description= "clean code principles"
[taxonomies]
tags = ["career", "tech"]
+++

**Coding** refers to the act of writing instructions in a programming language. In that sense, the coder is also a programmer. Since a program in a computer is a set of instructions to execute specific tasks. Therefore, a programmer is never alone, he is always working at the very least with the computer. Moreover, every program must serve a clear purpose: automating a routine task, performing repetitive or complex calculations, managing data, and so on. In bioinformatics, such programs are typically designed to transform raw biological data into formats that can be effectively used by other specialists for further analysis.
<!-- more -->
It's important to be aware that the program is not a static code but a living thing. The environment around it can evolve, requirements may change, and the program must adapt accordingly to remain relevant and useful. To keep the program *alive* and functional, it requires programmers, users and reviewers. Therefore, the code will need to be modified and tested by anyone as often as needed.

Best coding practices have been introduced to improve code readability (by other humans) and, consequently, ease program maintenance. In this context, *bad* or *good* code is, above all, code that either jeopardizes or saves the life of the program.

## What is a bad code?

* Doesn't do its job!
* Difficult to change.

### Reciprocally, a good code

* Works!
* Is easy to change.

### Therefore, what does a good programmer?

* Spends few time refactoring their code.
* Writes new features.

## Unreadable code

* A good code is comprehensible by anyone.
* Divide code into small, manageable parts.
* One single context for each part.
* Variables must have clear, self-explanatory names.
* Syntax is consistent:
  * `kebab-case`: Words are all lowercase and separated by dashes `-`.
  * `camelCase`: The first word is lowercase, and each subsequent word starts with a uppercase.
  * `snake_case`: Words are all lowercase and separated by underscore `_`.

## The code is too complicated!

* When it has no modules (always divide the code in smaller parts)
* When it is too nested
  * :balance_scale: **Golden rule:** no more than 3 indentations!
```
for
  for
    for
```
* To ensure that changing one element of the code does not force you to change other parts of the code.



## Last but not least

* Reduce coupling between functions as much as possible.
* All functions must be easy to test.


## References

> **The Pragmatic Programmer**
>
> *Andrew Hunt and David Thomas*
>
> From journeyman to master, 1999. ISBN-13: [978-0135957059](https://openlibrary.org/isbn/978-0135957059)
