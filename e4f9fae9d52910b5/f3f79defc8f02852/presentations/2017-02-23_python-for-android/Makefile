%.slides.html: %.ipynb slides_custom.tpl
	ipython3 nbconvert --to=slides --template=slides_custom.tpl --reveal-prefix=./reveal.js $<

NOTEBOOKS=$(wildcard *.ipynb)
SLIDES=$(NOTEBOOKS:.ipynb=.slides.html)

all: $(SLIDES)

clean:
	rm -f *.slides.html
