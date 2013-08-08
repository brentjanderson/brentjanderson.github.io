---
layout: post
title:  "Jekyll on Windows"
date:   2013-08-08 16:12:00
categories: jekyll guides
---

My Jekyll blog started out while waiting for ETL jobs to run at work. Looking to do something somewhat constructive with time I'd otherwise spend waiting, I decided to play around with Jekyll. That said, [Jekyll isn't particularly well-suited to windows](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html).

Here's my personal approach to getting Jekyll running on Windows:

__TL;DR:__ To run Jekyll on Windows, don't use Windows: use Vagrant.

# The basic steps
1. Install [Vagrant](http://www.vagrantup.com)
2. Create a directory for your blog + vagrant files
3. `vagrant init precise32 http://files.vagrantup.com/precise32.box`
4. [Use this gist](https://gist.github.com/brentjanderson/6189411) as your configuration file
5. `vagrant up`
6. `vagrant ssh`
7. `sudo apt-get update`
8. `sudo apt-get install ruby1.9.1 ruby1.9.1-dev make git`
9. `sudo gem install jekyll`
10. `cd /vagrant && jekyll new githubusername.github.io`
  * This assumes you want to serve from Github. Of course you can follow [the instructions for jekyll][jekyll] and hand-tune your setup.
11. `cd githubusername.github.io && jekyll serve -w`
12. On windows, in the folder you created in step 2, you will find your new Jekyll blog ready to go. You can preview the blog from <http://localhost:4000> on windows.
13. Edit your blog as much as you like!
14. Once you're ready to go, setup your remote to Github Pages within vagrant (or wherever you're publishing)...

	```
	  git init
	  git remote add origin git@github.com:githubusername/githubusername.github.io
	  git add .
	  git commit -a -m "Initial commit"
	  git push -u origin --all
	```
	
15. A few minutes later, your blog should be live at <https://githubusername.github.io>!

The key to all of this, of course, is setting up the vagrant instance to manage your blog. It makes things a lot simpler than messing around with ruby and devkits on Windows. You could also potentially setup something with git submodules so you have a base repository for your blogging project + vagrant file with a module to your actual github pages blog. I personally prefer the simpler configuration script, since it enables you to get moving pretty quickly and it's not hard to cart around.