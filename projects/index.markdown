---
title: projects
layout: default
active: projects
---
# projects

<ul class="posts">
    {% for post in site.categories.project %}
        <li><span><a href="{{ post.url }}">{{ post.title }}</a></span></li>
    {% endfor %}
</ul>
