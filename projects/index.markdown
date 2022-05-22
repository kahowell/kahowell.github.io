---
title: projects
layout: default
active: projects
---
# projects

<ul class="posts">
    <li><a href="/nutrition">Nutrition w/ Pyodide</a> (<a href="https://github.com/kahowell/nutrition">Code</a>)</li>
    <li><a href="ps1-memory-card-editor">PS1 Memory Card Editor</a></li>
    {% for post in site.categories.project %}
        <li><span><a href="{{ post.url }}">{{ post.title }}</a></span></li>
    {% endfor %}
</ul>
