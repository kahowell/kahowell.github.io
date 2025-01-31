---
title: Recovering from a Bad DNF Update
tags: [btrfs, dnf, borked]
permalink: /2024/12/recovering_from_bad_dnf_update.html
layout: post
---

Yesterday, I decided to do a dnf update before I signed off work for the day.
I figured it would be a nice way to wrap up my day. Then, unfortunately, btrfs
and dnf had other ideas.

First, I noticed that the dnf update stalled while upgrading small RPMs. I
thought, that's weird. It eventually erred out with a cpio error.

It stalled on the next package, and I got impatient, and powered off my laptop
manually, knowing I'd have a mess to clean up.

When I got back around to it, my display manager wasn't functional, so I ended
up needing to boot into recovery with `rd.break` and manually disable it.

Once I got into the system itself, I looked to see what the issue was, and
noticed that `df -h` reported 0 free space on my btrfs filesystem. I thought
this was odd, because I thought I had plenty of free space prior to the update
attempt, and dnf itself actually checks free space before allowing an update
to happen.

Typical cleanup, for example, deleting files from `~/Downloads` didn't help.

Turns out that I ran out of metadata blocks, and my filesystem effectively went
from having plenty of free space to none when this happened.

Following advice from
[a post from Marc Merlin's blog](https://marc.merlins.org/perso/btrfs/post_2014-05-04_Fixing-Btrfs-Filesystem-Full-Problems.html),
I first attempted a few different invocations of the `btrfs balance` command,
but I wasn't successful until I added a 1G ramdisk to the filesystem, which
btrfs used exclusively for additional metadata blocks.

Roughly the commands I used were:

```shell
truncate -s 1G /tmp/rescue.btrfs
LOOP=$(losetup --show -f /tmp/rescue.btrfs)
btrfs device add $LOOP /
btrfs balance start / --full-balance
btrfs device remove $LOOP
```

After this completed, I had a working filesystem again, but metadata usage was
still pretty high, so I decided to look for subvolumes I wasn't using anymore.
I was surprised to find that `moby-engine`/`docker` had created a bunch of
subvolumes at some point. So deleting all container images:

```shell
docker rmi $(docker images -q)
```

helped a lot.

After that, I had to clean up a partial RPM transaction.

The following steps worked well:

```shell
dnf distro-sync
dnf remove --duplicates
dnf reinstall '*'
```

After doing that and rebooting, I had a usable system again, yay!
