---
title: How I Think About Architecture
date: '2019-05-10T00:00:00.000Z'
draft: true
category: 'Architecture'
tags:
  - ''
description: 'What is software architecture?'
---

Software engineers sometimes talk about architecture. I can't say this word by
itself ever came up in college, and it's application has always felt nebulous.
Concretely:

* What do we mean by "Software Architecture"?
* What makes for good software architecture?
* How can we improve existing architectures?

## What is software architecture

Wikipedia gives us [as sound a definition][defined] as any:

> Architecture is both the process and the product of planning, designing, and
> constructing buildings and other physical structures.

The roots of the word architecture are, unsurprisingly, from two Greek words
meaning "chief creator". Architecture also carries some implied meanings:

* It serves a complex set of needs and purposes from different stakeholders
* Unifying patterns that apply progressively from macro- to micro-levels
* It applies to systems composed of physical and logical elements
* It's a form of art, and describes various styles over time

Thus:

> Architecture is the practice of designing unified patterns that, when applied,
> produce physical and logical elements that serve a complex set of
> heterogenous needs from various stakeholders over time.

## Good software architecture

"Good" architecture is therefore couched within the definition of an instance of
architecture. What makes one architecture "good" is poor in another context. One
universal measure of good architecture is whether it stands the test of time.
Ancient buildings are revered and studied because they have consistently met
stakeholder needs over an extended period of time. Likewise, concepts in
software engineering that continually meet user needs become elements of
good architecture over time. The standard libaries of most langauges,
patterns regarding state management, and foundational protocols are
all elements that combine to create good software architecture.

Thus, what makes for good software architecture is a combination of time-tested
software elements and components layered with strategies for ensuring that the
software can continually serve the domain in which it operates for the horizon
of the system's usefulness. Building a system that we intend to last for
millenia is a much harder proposition than one that we intend to last
for a decade, much less a week. Even so, the difference betweeen one
millenium and a decade is not that much given that we can hardly
predict the future beyond a few months with sure certainty.

Therefore, when a system has an unknown shelf life that is likely to span many
years, we need strategies to support the continuous evolution of the system.

## Improving existing architecture

I think the first step with improving (or establishing) architecture is to
[define the qualities the system should conform to][ilities], and for the
system to enforce those qualities as part of quality verification. In
practice, this means to include architecture qualities as part of
automated tests.

TODO: Finish thoughts here

[defined]: https://en.wikipedia.org/wiki/Architecture#Definitions_and_etymology
[ilities]: https://en.wikipedia.org/wiki/List_of_system_quality_attributes