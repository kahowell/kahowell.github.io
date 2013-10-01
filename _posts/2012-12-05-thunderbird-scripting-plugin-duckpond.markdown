---
title: Thunderbird Scripting Plugin (DuckPond)
tags: [project, python, thunderbird, xpcom]
category: project
permalink: /2012/12/thunderbird-scripting-plugin-duckpond.html
layout: post
---

In my undergraduate software engineering course, Bert Cortina, Kartik Verma,
and I developed a Thunderbird plugin over the course of the semester. What we
developed originally started out as a scripting language for email-related
tasks, but quickly evolved into a graphical workflow-based scripting system.

Each action in the workflow is programmed as a python module, allowing
infinite extensibility of the system. The model is essentially that of a
pipeline: each module reads a certain type of data and passes it to the next
module.

The system interfaces with Thunderbird through XPCOM, specifically PyXPCOM,
since we were using Python.

The features we were able to implement by the end included:

 - Parsing entire mailboxes, or individual folders (Inbox, Sent, etc.)
 - Filtering emails by regular expression
 - Extracting attachments
 - Zipping attachments into a single zip file

DuckPond is what we internally called the project. At the end of the course,
we decided to release it as open source.

The plugin sources and binary xpi are hosted [on Google Code][tbscript].

**Note that the plugin does not work on newer versions of Thunderbird, since
AFAICT, there is not a version of [pythonext] which is compatible with newer
Thunderbird releases (please correct me if I'm wrong).**

[tbscript]: http://code.google.com/p/tbscript-plugin/
[pythonext]: http://code.google.com/p/pythonext/
