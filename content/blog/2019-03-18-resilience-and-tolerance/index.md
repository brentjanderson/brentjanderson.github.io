---
title: Resilience and Tolerance
date: '2019-03-18T00:00:00.000Z'
draft: false
category: 'Journal'
tags:
description: 'Seth Godin wrote about systems engineering'
---

From https://seths.blog/2019/03/resilience-and-tolerances/

> You’ll probably find that while precision feels like the way forward, resilience, the ability to thrive when things go wrong, is a much safer bet.

Although Seth is famous for writing about marketing, his writing reflects truth. The truths he writes about apply broadly.

Reading this reminds me of the best literature in engineering reliable software systems. The pattern that seems to be most powerful is to declare how things ought to be, and to have a machine that is responsible for herding what it observes in your system towards what you said it's supposed to be. Kubernetes manifests come to mind in particular.

Having strong precision is important because it can help clean up a lot of the messes before you get it out into the real world. Type systems, static analysis, test coverage, and other pre-flight checks help rule out classes of problems that you would otherwise have to build resilience for.

From there, we can focus on resilience. Resilience requires understanding other patterns. Systems thinking, embracing failure rather than insulating it, setting and enforcing clear expectations between system components. Resilience requires having a clean path to shut things down, and a clean path to start things up. If you can reboot something into a known stable state and then move forward, you are far more resilient and ant-fragile.