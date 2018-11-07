#!/bin/bash

TITLE=$1
TITLE_SLUG=$(echo $1 | iconv -t ascii//TRANSLIT | sed -E s/[~\^]+//g | sed -E s/[^a-zA-Z0-9]+/-/g | sed -E s/^-+\|-+$//g | tr A-Z a-z)
DATE=`date +%Y-%m-%d`
BLOGPATH="content/blog/${DATE}-${TITLE_SLUG}"

mkdir -p $BLOGPATH

echo """---
title: $TITLE
date: '${DATE}T00:00:00.000Z'
draft: true
category: ''
tags:
  - ''
description: ''
---""" > $BLOGPATH/index.md

code $BLOGPATH/index.md