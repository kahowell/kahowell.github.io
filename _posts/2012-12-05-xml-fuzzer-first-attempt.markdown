---
title: XML Fuzzer (Python)
tags: [fuzzer, project, python, python 3, xml, xsd]
category: project
permalink: /2012/12/xml-fuzzer-first-attempt.html
layout: post
---
A first quick attempt an a program that will take as input an XSD and produce a
file with random data that conforms to the XSD. Written in a couple of weekends
in Python; it is incomplete in that it does not have generators for all of the
XSD defined primitive data types. Whether it works for a particular XSD is kind
of hit or miss. Available at [GitHub]. Licensed under GPLv3 with an additional
clause to keep my name on it.

[GitHub]: https://github.com/kahowell/py-xmlfuzzer/

I used this as a way to familiarize myself with some Python 3 features as well,
especially dictionary comprehensions, so some of the code may look out-of-place
to someone who codes for Python 2.x.

Soon, I will be posting/uploading a newer, better (less naive) attempt in a
different programming language.
