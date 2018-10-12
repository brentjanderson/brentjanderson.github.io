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

## A few terms before we dive in

Before we define Event Sourcing, let's take a step back and define some related concepts first.

Software exists to help people get things done. People write software to capture pictures, write blogs, tweet, trade stocks, and more. As people use software, we give software information and then ask it to keep track of it for us. This information could be the picture we took or the blog post we wrote. If a computer didn't remember what we wanted it to remember, it wouldn't be particularly useful.

**Programmers call this stuff that we want the computer to remember "state".** State is anything we want the computer to remember over time. A simple calculator keeps track of the numbers you want to crunch. Your photo library keeps photos and information about them, like the time you took the photo. More sophisticated systems like banking or accounting software track balances and transactions.

Although state is what makes software useful, it is also what makes software hard. "Stateless" software is easier to write, improve, and understand. Most bugs come from problems with managing state. Thus programmers spend lots of time learning about ways to manage and simplify state.

Most software tracks state using a database. A database provides a central place to store and retrieve state. Databases make it easier to write complex systems because they are so good at managing state. When we put something in an online shopping cart, we are adding something to the database. If we come back to that cart a few days later, the cart still has our stuff in it. That's because the database remembers it for us.

Basic database use works for many applications. Sometimes our natural approach to using databases leads to problems down the road. For instance, if we have two people editing the same document at the same time, and both hit save, what will happen? What about handling an order when a customer requests a refund, but we track the order in more than one system? How do we keep those systems in sync? What happens when a customer goes to pay for something but the payment gateway is down? How do we handle that error?

Although databases can handle these scenarios, over time we collect complexity. Well-designed software should be flexible in the fae of these and other changes.

## What is event sourcing?

## Why is it useful?

## When should it be applied?

## Where should it be avoided?

## What other pitfalls are there?

## How to get started with event sourcing
