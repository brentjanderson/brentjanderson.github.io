---
title: When you write a script that you didn't need
date: '2018-02-13T00:00:00.000Z'
draft: true
category: 'Journal'
tags:
description: 'What happens when exploring requirements brings you back to square one?'
---

In my efforts to not burdened Bob with too many questions, I think I made a mistake today.

Which is to say yesterday.

In working on getting our `atlas-db` package upgraded to Version 3.0, I discovered that we needed to make some adjustments to the way data is stored in our staging and production databases. That let me down a rabbit hole of experimentation that resulted in a 500 line long script.

The script incorporated common table expressions and date of modifying common table expressions which I have never heard of or used before. It was a work art. And it was totally useless.

I submitted it to Bob to review, and after chatting with him directly, we determined a few changes needed to happen. As I worked on those changes, it became increasingly evident that we have existing facilities to handle the work that I was trying to do. Namely, our data import engine can overwrite existing records just fine, and anytime we have conflicts, we can just delete the data from the database and let the importer bring the data back in. It really is a simple as that. Nothing extra fancy or complicated to merge duplicate records.

I'm glad we at least found a way to improve a check constraint that was causing issues, so that it can instead be a row-level security policy (those are easier to suspend for administrative activity, if necessary). Otherwise, the last two days have been close to a wash.

Lesson learned: It's a good idea to sanity check before asking.