---
title: Event Sourcing for Beginners
date: '2018-10-12T00:00:00.000Z'
draft: false
category: 'Tech Topics'
tags:
  - 'Event Sourcing'
  - 'DDD'
  - 'Software Engineering'
description: 'An essay on an alternative approach to managing data in complex applications'
---

![cockpit.jpg](./cockpit.jpg 'Image by https://unsplash.com/@dlohmar')

_Note: This article is still a draft, hence the blank sections at the bottom. Thanks for stopping by either way!_

I am fascinated by pushing the boundaries of software. A few years ago, I read [this marvelous piece about Logs](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying) - not messages for debugging, but using a log as a data structure. Ever since, the power of logs and capturing events has fascinated me.

Not long after that piece about real-time data and logs, I started to watch and read up on [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html). I am not the first to write about event sourcing, CQRS, or other related topics. Rather, this article aims to be the kind of content I wished I had when I first started down this rabbit hole.

## CRUD

## Where CRUD falls short

## State management is hard

Before we define Event Sourcing, let's take a step back and talk about some related concepts.

Software exists to help people get things done. Most software requires that we track state on behalf of the user. We store photos, we remember what things they liked or retweeted, we record if a blog post has been published yet or not, and so on.

Most commonly, we use a database to track state. We create tables, relationships, and add data over time. Choosing a database is fraught with a lot of complex decisions (although I personally recommend Postgres for most projects). Most frequently, we reach for whatever we feel most comfortable using.

Unfortunately, state management is hard. This is true no matter what you use to store your data.

### Data integrity & backups

How do you plan on keeping your data safe, available, and recoverable in the face of failure?

### The way you store the data is different than the way you use the data
* Migrating state, especially in a running system
* State you didn't think you needed to keep around

Unfortunately, the way you view your data depends on the context you find it in. When stored in a relational database, your data will be in the form of rows and columns on a disk. When it's on the user's screen, your data is turned into pixels. Somewhere in between those two extremes, data is in the form of JSON, objects, and many other forms. Because the database is the ultimate source of state in your application, the shape of your data in your database will shape the rest of your application. This is not always ideal. What happens when you want to present your data in a way that is different from the way you store that data? Or when you need to integrate data from multiple places at once? These state management issues are hard.

Another challenge in state management 

## What is event sourcing?

## Why is it useful?

## When should it be applied?

## Where should it be avoided?

## What other pitfalls are there?

## How to get started with event sourcing
