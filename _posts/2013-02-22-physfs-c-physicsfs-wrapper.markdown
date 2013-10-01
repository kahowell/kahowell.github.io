---
title: PhysFS++ (C++ PhysicsFS Wrapper)
tags: [c++, physicsfs, project]
category: project
permalink: /2013/02/physfs-c-physicsfs-wrapper.html
layout: post
---
Last night I committed a small project to GitHub - [PhysFS++][github]. PhysFS++
provides C++ wrappers around Ryan C. Gordon's [PhysicsFS][physfs]. I licensed
these wrappers under the zlib license, same as PhysicsFS (at the time of
writing). It wraps PHYSFS_FILE\* in C++ streams (both istream and ostream).

[physfs]: http://icculus.org/physfs/

While I'm certain this has been done before, I decided to do myself from
scratch  as a learning experience, and because I could find no PhysicsFS C++
wrappers with clear licensing.

I do not guarantee the wrappers are perfect, but a smoke test showed that they
work.

See the README at [https://github.com/kahowell/physfs-cpp][github] for more
info.

[github]: https://github.com/kahowell/physfs-cpp
