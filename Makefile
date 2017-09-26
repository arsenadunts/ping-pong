SHELL := /bin/bash

.PHONY: all publish push-master push-gh-pages

all: publish

publish: 
	git config --global user.name "publisher" && \
	git config --global user.email "publisher@git.hub" && \
	git checkout -b gh-pages && \
	git add . && \
	git commit -am 'update gh-pages' && \
	git push https://github.com/username/reponame gh-pages --force

push-master:
	git add . && \
	git status && \
	git commit -m 'first commit'
	git push origin master

push-gh-pages:
	git checkout gh-pages && \
	git rebase master && \
	git push origin gh-pages && \
	git checkout master