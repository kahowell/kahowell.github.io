%.slides.html: %.ipynb slides_custom.tpl
	jupyter-nbconvert --to=slides --no-prompt --template=slides_custom.tpl --reveal-prefix reveal.js $<

NOTEBOOKS=$(wildcard *.ipynb)
SLIDES=$(NOTEBOOKS:.ipynb=.slides.html)

all: $(SLIDES)

clean:
	rm -f *.slides.html
