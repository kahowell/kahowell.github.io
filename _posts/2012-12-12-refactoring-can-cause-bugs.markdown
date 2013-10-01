---
title: (Careless) Refactoring Can Cause Bugs
tags: [eclipse, java, refactoring, tips]
permalink: /2012/12/refactoring-can-cause-bugs.html
layout: post
---
While coding today, I had a realization: refactoring can introduce subtle bugs.

I'm not just talking about variable name changes that break logic where the
variable names are referenced external to the code (ex. request parameters in a
web application).

I'll give a quick example. Here's a code snippet before inline refactoring:

{% highlight java %}
boolean saidHi = false;
for (int i = 0; i < 2; i++) {
    String message = saidHi ? "Hello again" : "Hello";
    saidHi = true;
    System.out.println(message);
}
{% endhighlight %}

This will output:

    Hello
    Hello again

If you then apply inline to the message variable because, let's say, you like
it a little more succinct, then you get this:

{% highlight java %}
boolean saidHi = false;
for (int i = 0; i < 2; i++) {
    saidHi = true;
    System.out.println(saidHi ? "Hello again" : "Hello");
}
{% endhighlight %}

This will output:

    Hello again
    Hello again

A full class with the function both ways:

{% highlight java linenos %}
class BadRefactor {

    public static void main(String[] args) {
        beforeRefactor();
        System.out.println("--------"); // print separator
        afterRefactor();
    }

    public static void beforeRefactor() {
        boolean saidHi = false;
        for (int i = 0; i < 2; i++) {
            String message = saidHi ? "Hello again" : "Hello";
            saidHi = true;
            System.out.println(message);
        }
    }

    public static void afterRefactor() {
        boolean saidHi = false;
        for (int i = 0; i < 2; i++) {
            saidHi = true;
            System.out.println(saidHi ? "Hello again" : "Hello");
        }
    }
}
{% endhighlight %}

This was using the inline refactoring in Eclipse Juno SR1.

So be careful when using refactoring; if using Eclipse, use the preview feature
to make sure there are no unwanted side effects before applying.

Have you thought of, or run into any cases where refactoring messed things up
in a subtle way? Feel free to comment.
