---
title: Effectively Using TODOs in Eclipse
tags: [eclipse, tips]
permalink: /2012/12/effectively-using-todos-in-eclipse.html
layout: post
---
I wanted to share a couple of techniques I've discovered for using TODOs
effectively in Eclipse.

The Tasks view in Eclipse can show each TODO/FIXME,etc. comment that you've
left in your code. However, by default, it is configured to only show TODO
tasks. To change this, select "Configure Contents..." from the Tasks View Menu
(small downward-pointing triangle).

![Configure Contents Location]({{ site.url }}/images/eclipse-1.png)

To allow all types of task comments (TODO,FIXME,etc.), uncheck the TODOs
configuration. Also from here, you can create multiple configurations that
allow you to filter tasks by different criteria. I use the configurations as a
set of filters all applied together (think logical AND) (check "Show items that
match all the configurations checked below").

The first filter I usually create is one to filter out all tasks not related to
the currently selected project - just change "Scope" to "On any element in the
same project."

The "Description" setting is also very handy. I've started tagging TODOs with
tags (like \[GUI\] or \[noclue\]), and then I create configurations that will
show only those tags, or filter them out.

![GUI filter]({{ site.url }}/images/eclipse-guifilter.png)

With the drop-down set to "contains", you get a filter that will only show a particular tag.

![Hide GUI filter]({{ site.url }}/images/eclipse-hideguifilter.png)

With it set to "doesn't contain", you get a filter that hides a particular tag.
