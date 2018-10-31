---
title: Tim Cook on Privacy
date: '2018-10-24T00:00:00.000Z'
draft: false
category: 'Commentary'
tags:
  - 'Privacy'
  - 'Apple'
  - 'Tim Cook'
description: 'Tim Cook on privacy'
---

I recently read Tim Cook's inspiring remarks on privacy. If you haven't read it yet, I encourage you to [check it out](https://www.privacyconference2018.org/system/files/2018-10/Tim%20Cook%20speech%20-%20ICDPPC2018.pdf).

As I have reflected on his message, one thing stood out: Technology must be infused with our humanity. That requires human commitment to that ideal. Technology can't put humanity into itself: That is our unique human responsibility.

We could say Technology is indifferent. The truth is, it's not anything. It doesn't care. When we say that an algorithm is biased, the truth is that the way it was implemented was biased. The brick of aluminum and glass in your hand It doesn't care if it's been recharged recently, or what you share on the internet. To the machines involved, the pictures and words we share on the internet (including this blog post) look the same as an Amazon order or an advertisement. There is no inherent meaning to them from the machine's point of view.

In its darkest forms, the systematic aggregation of data is quietly shaping our lives. From the ads we see to the decisions we make, we are subtly controlled by powerful algorithms that are seeking to shape our behavior. Most of the time, this influence is intended to be innocuous. "Advertising helps the economy." "We want the world to be more open and connected." Surely there is some value to these claims, but the aggregation of the data and the behavior is creating a complex soup of interactions that none of us can fully comprehend. It is impossible to tease apart.

> If green is your favorite color, you may find yourself reading a lot of articles — or watching a lot of videos — about the insidious threat from people who like orange.

> In the news almost every day, we bear witness to the harmful, even deadly, effects of these narrowed worldviews.

Tim's ultimate question has lingered on my mind:

> What kind of world do we want to live in?

I want to live in a world where privacy is a given human right. Where we can wield powerful tools and algorithms responsibly to genuinely improve humanity. Where we are humble enough to accept that humanity is flawed, and that our algorithms will be flawed. Where we are optimistic enough to embrace that humanity can become better, and that our work will improve.

Tim's call for a comprehensive federal privacy law (likely comparable to the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union) is encouraging to me. Although I generally disapprove of regulation, when the market forces of the world drive us away from the kind of world we want to live in, corrective action must be considered. Apple standing for privacy and attempting to educate their broad customer base on the importance of privacy is another approach that, while fruitful, is not going to establish sweeping societal commitments to privacy - especially from competitor's who blatantly disregard privacy. For reference, Tim calls for a law with the following rights enshrined:

1. The right to have personal data minimized

"Companies should challenge themselves to de-identify customer data — or not to collect it in the first place."

2. The right to knowledge

"Users should always know what data is being collected and what it is being collected for. This is the only way to empower users to decide what collection is legitimate and what isn't. Anything less is a sham."

3. The right to access

"Companies should recognize that data belongs to users, and we should all make it easy for users to get a copy of, correct and delete their personal data."

4. The right to security

"Security is foundational to trust and all other privacy rights."

I believe that tools to protect and minimize personally identifying information should be baked into the most critical pieces of infrastructure at companies around the world. One approach that is promising is encrypting personally identifying information (PII) in motion and at rest, and decrypting it on-demand. The encryption key would be different for each user (or multiple keys per user for greater granularity). When invoking "right to erasure", the system would throw away the encryption key and notify dependent services of the erasure. Dependent services would update caches, database views, etc. to remove any traces of the encrypted data, where possible. In this way, data can be securely managed and protected while also being accessible to the application.

> Technology's potential is, and always must be, rooted in the faith people have in it, in the optimism and creativity that it stirs in the hearts of individuals, in its promise and capacity to make the world a better place. We will never achieve technology's true potential without the full faith and confidence of the people who use it.

> "Privacy means people know what they're signing up for, in plain language, and repeatedly." ~ Steve Jobs

Thank you, Tim (and Steve), for taking this kind of a stand for privacy and human rights.
