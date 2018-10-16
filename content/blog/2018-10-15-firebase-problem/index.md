---
title: The problem with Firebase
date: '2018-10-15T00:00:00.000Z'
draft: false
category: 'Tech Topics'
tags:
  - 'Databases'
  - 'Firebase'
  - 'Software Engineering'
  - 'Postgres'
description: 'Why firebase may not be the best fit for your project'
---

![fire.jpg](./fire.jpg 'Photo by https://unsplash.com/photos/HCCJgI4YwbQ')

We use [Firebase][firebase] at [Yours.co][yours.co] for our entire backend. Our app depends upon cloud functions, datastore, push notifications and more.

Firebase is well-suited to certain types of real-time applications. But, sometimes people ask me "Should I use Firebase?" Here are my open thoughts on Firebase's products and how they fit into a product's strategy.

## A few caveats

- [Our use case][yours.co] is not your use case. Firebase can be well-suited to other applications.
- We don't use Firebase Cloud Firestore. It might be a lot better than their original Cloud Datastore product.
- Firebase is always getting better. Check [Firebase][firebase] to decide if it's a good fit for your needs.

## Firebase: The Good Parts

Firebase is excellent for getting a product prototype or MVP off the ground. They take care of running your back end, and provide [a suite of good services](https://firebase.google.com/products/) for advanced features. They offer real-time syncing with your app, push notifications, and more. If you invest in the Firebase ecosystem, you can get up and running fast with very little overhead. You don't have to worry about managing servers and infrastructure. You also get Google's security and infrastructure teams supporting your product.

Firebase also has a huge user community to bounce ideas off of and get guidance on best practices. Having an ecosystem around your technology decisions may help you move faster. Others may have already had the same problem and shared their solution to it with the world.

**This might be good enough for many products, and these are great tools to use when you need them.**

## Firebase: The problem

Unfortunately, many applications suffer from significant real-world constraints:

- Firebase's most advanced features introduce tight coupling between your app and database
- Firebase can make it hard to evolve your product.
- Firebase makes it hard to be backwards compatible
- Datastore makes updating complex data structures harder than alternatives like relational databases
- Firebase introduces significant lock-in with each component. This is a double-edged sword.

These are the top points I would urge potential Firebase customers to consider.

No technology is perfect. _Firebase might be the best solution to your specific situation_. Weigh your project's constraints against technology options. What can your team get done? What do you think you need to get done in the future?

## Tight Coupling

Tight coupling is the biggest issue. It is the root of most of the problems listed above. Tight coupling means that a change to one part of an application triggers changes in other parts. A good example of this in the physical world would be a car with wheels welded to the axle. You couldn't change a tire without replacing the axles.

Early technical decisions have huge impacts in the long-term path of the product. It's important to **keep your options open** and recognize that **things will change** over time. Startups suffer from this problem more than established products. **The need for future agility is proportional to future product uncertainty.** To [ship early and ship often](https://blog.ycombinator.com/tips-ship-early-and-often/), you must think about enabling future growth.

Firebase encourages tight coupling. It encourages meshing your app's user interface with the database. Thus, you must consider user interface or schema changes together. Is it okay to update the user interface and backend at the same time? What if you maintain older versions? Tight coupling makes for poor backwards compatibility.

Mobile apps tend to need backwards compatibility. If you expose an API for customers to consume, you definitely need to be backwards compatible. The apps at [Yours.co][yours.co] check their version with the latest supported version in Firebase. If you are no longer supported, the app locks up until the user updates to the latest version. For some use-cases this may be sub-optimal.

Unless backwards compatibility does not matter, keep your app loosely coupled. Firebase makes this particular constraint very hard, if not impossible, to handle.

This does not matter as much if you only ship a web application that is evergreen with your backend.

## Updating complex data structures

Firebase datastore is a document database with a single document in it.<a name="sup1" href="#footnote1"><sup>1</sup></a> Document databases are great at handling unstructured data at massive scale for analytics. If you don't know the shape of your data in advance, document databases can be a terrific solution.

Most applications rely on known data with known fields. We know that users will sign up with an email address. Users have connections with other users. Tweets are 280 characters long. When using a schemaless database like Firebase, your app must handle your schema. You are responsible for managing data integrity, not your database. This generally means that document databases are a weaker fit for many applications.

Document databases fail to model relationships between entities. Relational databases have decades of optimizations for joining and filtering data and relationships. With a document database, it is up to the engineer to build poor replacements for joins and filters in your app. Let's suppose we used a document database to model Twitter or Mastodon. A user produces tweets, and users can see a stream of tweets from their followers.

A relational database would have a table of tweets, a table of users, and a table of who follows whom. We model the relationships between entities with foreign keys. Although this has drawbacks at massive scale, for most apps it's a great start.

A document database like Firebase could have a subkey for users and a subkey for tweets. This would give you all the tweets for all users. But, you would need to query every user to pull up usernames and profile pictures to go with each tweet. You could stuff user tweets inside each user, but you would need to query every user to make a global timeline. The compromise is to then copy every tweet into both places. But now you have two problems when you go to edit/update content.

At Yours.co, keep collections of data separate and link them with references. We have a `users` collection that describes information about each user generally. We sprinkle little bits of user data throughout the application. This makes reading easier for the app at the expense of complex writes. [Relational databases](https://en.wikipedia.org/wiki/Relational_database) like Postgres or MariaDB are excellent at these common workloads. By contrast, document databases leave this work up to you and your application. This is more work for you, slower, and more error prone.

This also makes it harder to keep data in sync. If I copy data like an email address in a few places, when the user updates their email I have to remember what to update. This does not scale well, especially as a team evolves and develops a product. Data governance problems become more complex under a document-oriented model.

## Real-time is overpromised

Firebase's killer feature is realtime data. It feels like magic to edit something on the client side and see it update in real time in a different part of the app. Firebase makes this possible, for free, out of the box. But, if you face any of the above constraints, you may not get the real-time features you expect. Firebase's real-time features only work if you mesh your UI with the data model. If you want to use an API in front of Firebase, you have to re-implement your own realtime features in some other way. Firebase's realtime features are also data-oriented rather than application-level events. Instead of reacting to "A user registered" you would see "Inserted an object in /users".

## Lock-in

Firebase offers a suite of tools from database to A/B testing and more. The entire suite is impressive, and we use several components at Yours.co to make our app work. Despite the above complaints, **Firebase may be a good fit for some projects**. That said, Firebase is a business built around getting you linked to a community of products. If you buy into authentication, you will want to use firestore or datastore. When you need to store uploaded user files, Firebase Storage is a convenient option. A/B testing, crash reporting, push notifications, and more are also a few clicks away.

This convenience is not a bad thing. This is why Firebase can be a great tool for the right product. Before you commit to part of firebase, are you okay with the rest of the products in the Firebase ecosystem? Is the lock-in worth not writing it yourself? Weighing such trade offs is the essence of good software engineering and architecture.

## When to use Firebase

I would recommend Firebase to new, greenfield projects that:

- Know what they need to achieve a good MVP out of the gate
- Don't want to fiddle with infrastructure concerns
- Are web-based only/Don't need backwards compatibility
- Have a small-ish team

## What I recommend instead of Firebase

I recommend the technology a team is most comfortable with. I recommend the following for the good parts of Firebase without using Firebase.

### Elixir + Phoenix

Elixir and Phoenix offer an incredible [concurrency and scaling][elixir-and-phoenix] story. It enables real-time websockets in a way that is scalable and performant. It provides a rock-solid foundation for building your own apps. You can also [run it on Heroku](https://hexdocs.pm/phoenix/heroku.html#content) if you don't want to run your own infrastructure.

### Postgres

[Postgres](https://www.postgresql.org/) is a rock solid relational database that is fast, efficient, and supports many modern features. It can store JSON if you want the flexibility of a document database. It does geographic calculations if that's your need. It supports everything from relational databases. It can even do [realtime events](https://blog.lelonek.me/listen-and-notify-postgresql-commands-in-elixir-187c49597851) similar to Firebase.

### GraphQL

GraphQL APIs are an alternative to REST APIs. They are strongly typed, self-documenting, and let you query exactly what you need. I am a fan of [Absinthe GraphQL](https://absinthe-graphql.org/) for the backend and [Apollo](https://www.apollographql.com/) on the frontend.<a name="sup2" href="#footnote2"><sup>2</sup></a> It also supports realtime out of the box using Subscriptions.

GraphQL decouples the backend from the frontend. It can version and deprecate fields for backwards compatibility concerns. It enables tying in the best backend for the job.

### Summary

- Firebase is great for some use-cases
- Try to go into it with eyes wide open
- If your data is not a good fit for a document database, be careful!
- Consider alternatives that will grow with you for longer

[firebase]: https://www.firebase.com
[yours.co]: https://yours.co
[elixir-and-phoenix]: https://phoenixframework.org/blog/the-road-to-2-million-websocket-connections

## Footnotes

<a name="footnote1" href="#sup1">1</a>: I have not used Firebase Firestore yet (it's still in beta), but it doesn't seem to include relational indices either.
<a name="footnote2" href="#sup2">2</a>: I have tried Apollo Server. If you want cutting-edge features or are all-in on Node, it's a good option. I find Absinthe is elegant and declarative. Elixir and Phoenix handle realtime subscriptions well too.
