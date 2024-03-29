{%- extends 'basic.tpl' -%}
{% from 'mathjax.tpl' import mathjax %}

{%- block any_cell scoped -%}
{%- if cell.metadata.slide_type in ['slide'] -%}
    <section>
    <section>
    {{ super() }}
{%- elif cell.metadata.slide_type in ['subslide'] -%}
    <section>
    {{ super() }}
{%- elif cell.metadata.slide_type in ['-'] -%}
    {%- if cell.metadata.frag_helper in ['fragment_end'] -%}
        <div class="fragment" data-fragment-index="{{ cell.metadata.frag_number }}">
        {{ super() }}
        </div>
    {%- else -%}
        {{ super() }}
    {%- endif -%}
{%- elif cell.metadata.slide_type in ['skip'] -%}
    <div style=display:none>
    {{ super() }}
    </div>
{%- elif cell.metadata.slide_type in ['notes'] -%}
    <aside class="notes">
    {{ super() }}
    </aside>
{%- elif cell.metadata.slide_type in ['fragment'] -%}
    <div class="fragment" data-fragment-index="{{ cell.metadata.frag_number }}">
    {{ super() }}
    </div>
{%- endif -%}
{%- if cell.metadata.slide_helper in ['subslide_end'] -%}
    </section>
{%- elif cell.metadata.slide_helper in ['slide_end'] -%}
    </section>
    </section>
{%- endif -%}
{%- endblock any_cell -%}

{% block header %}
<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="chrome=1" />

<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

<title>{{resources['metadata']['name']}} slides</title>

<!-- General and theme style sheets -->
<link rel="stylesheet" href="{{resources.reveal.url_prefix}}/css/reveal.css">
<link rel="stylesheet" href="{{resources.reveal.url_prefix}}/css/theme/serif.css" id="theme">

<!-- If the query includes 'print-pdf', include the PDF print sheet -->
<script>
if( window.location.search.match( /print-pdf/gi ) ) {
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '{{resources.reveal.url_prefix}}/css/print/pdf.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
}

</script>

<!--[if lt IE 9]>
<script src="{{resources.reveal.url_prefix}}/lib/js/html5shiv.js"></script>
<![endif]-->

<!-- Get Font-awesome from cdn -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css">

{% for css in resources.inlining.css -%}
    <style type="text/css">
    {{ css }}
    </style>
{% endfor %}

<style type="text/css">
/* Overrides of notebook CSS for static HTML export */
.reveal {
  font-size: 160%;
}
.reveal pre {
  width: inherit;
  padding: 0.4em;
  margin: 0px;
  font-family: monospace, sans-serif;
  font-size: 80%;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
.reveal pre code {
  padding: 0px;
}
.reveal section img {
  border: 0px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}
.reveal i {
  font-style: normal;
  font-family: FontAwesome;
  font-size: 2em;
}
.reveal .slides {
  text-align: left;
}
.reveal.fade {
  opacity: 1;
}
.reveal .progress {
  position: static;
}
div.input_area {
  padding: 0.06em;
}
div.code_cell {
  background-color: transparent;
}
div.prompt {
  display: none;
}
div.output_area pre {
  font-family: monospace, sans-serif;
  font-size: 80%;
}
div.output_prompt {
  /* 5px right shift to account for margin in parent container */
  margin: 5px 5px 0 0;
}
.rendered_html p {
  text-align: inherit;
}

html .rendered_html {
  font-size: 100%;
}
</style>

<!-- Custom stylesheet, it must be in the same directory as the html file -->
<link rel="stylesheet" href="custom.css">

</head>
{% endblock header%}


{% block body %}
<body>
<div class="reveal">
<div class="slides">
{{ super() }}
</div>
</div>

<script src="{{resources.reveal.url_prefix}}/lib/js/head.min.js"></script>

<script src="{{resources.reveal.url_prefix}}/js/reveal.js"></script>

<script>

// Full list of configuration options available here: https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
controls: true,
progress: true,
history: true,
slideNumber: 'c/t',
//width: '80%',
//height: '80%',
width: 800,
height: 600,
margin: 0.1,
minScale: 0.5,
maxScale: 2,
center: false,

theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/none

// Optional libraries used to extend on reveal.js
dependencies: [
{ src: "{{resources.reveal.url_prefix}}/lib/js/classList.js", condition: function() { return !document.body.classList; } },
{ src: "{{resources.reveal.url_prefix}}/plugin/notes/notes.js", async: true, condition: function() { return !!document.body.classList; } }
]
});
</script>

<!-- Loading mathjax macro -->
{{ mathjax() }}

<script>
Reveal.addEventListener( 'slidechanged', function( event ) {
  window.scrollTo(0,0);
  MathJax.Hub.Rerender(event.currentSlide);
});
</script>

</body>
{% endblock body %}

{% block footer %}
</html>
{% endblock footer %}
