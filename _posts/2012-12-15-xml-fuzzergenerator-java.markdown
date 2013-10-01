---
title: XML Fuzzer/Generator (Java)
tags: [guice, java, maven, project, xml, xsd]
category: project
permalink: /2012/12/xml-fuzzergenerator-java.html
layout: post
---
I finally got around to committing my second attempt at an XML fuzzer. It is
not yet complete, but may still be useful. It is licensed under the MIT
license.

[http://github.com/kahowell/java-xmlfuzzer][github]
[github]: http://github.com/kahowell/java-xmlfuzzer

The project uses Apache's schema support in the XMLBeans library to read a
given XSD file, and then proceeds to traverse the XSD, starting at a specified
element (i.e. the root of the XML), generating (hopefully) valid XML as it
reads each part of the schema.

I realized early on that I would not be able to solve all constraint (XSD
facet) combinations for a given type or element (imagine the case where a type
has an enumeration with "0" and "1" and a pattern facet with the regex
"\[a-z\]\*" - unsolvable!), so I built a way for it to be extensible/flexible:
the app chooses value generators based on the type, and one can provide
additional generators for custom types by implementing a single, simple
function for an abstract class and can then register the generator with the
program. The expectation is that for sufficiently complex types, the user would
simply write their own random generator. I am trying to strike a balance
between two extremes - having the generators be general, and having the
implementation stay simple/clean.

The project is a Maven project, and uses a few Apache Commons libraries. I
utilized Google Guice in managing the components and value generators.

I am going to continue to work on this project as time permits. If you'd like
to participate, feel [free to fork it on GitHub][github].

I also hope to document the project a little better/write a little more about
it. If I do, I will update this post accordingly.
