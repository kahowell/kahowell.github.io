---
title: Dependabot Ignores
tags: [dependabot, github]
category: project
permalink: /2023/09/dependabot_ignores.html
layout: post
---

We use dependabot to notify us of regular library updates.

We hit a confusing edge case:

1. Long ago, dependabot picked up major version updates for libraries.
2. At the time we were not yet ready to update our code to work with these
   updates, so we used `@dependabot ignore this major version`, to keep getting
   minor version updates for the major version we were on. (For example, we
   were on quarkus 2.x and were not yet ready to move to quarkus 3.x)
3. Dependabot advised that updating the library independently should clear the
   ignore, however, [this doesn't work as advertised, and dependabot no longer
   advertises this][gh-comment].

Solution:

1. Confirm dependencies are being ignored:
 * Open the dependabot logs by navigating: `Insights` -> `Dependency Graph` ->
   `Dependabot` -> `Last checked ${timeframe}`.
 * Look for "Ignored version" in the update log and note what dependencies are
   affected.
2. Locate pull requests where the ignore(s) originated:
 * Use `is:pr is:closed is:unmerged involves:dependabot` as criteria.
3. Comment `@dependabot reopen` on the closed pull request(s).
4. Dependabot will reopen the pull request and clear the ignore. If the
   dependency has had subsequent releases, it'll likely close the PR and open a
   fresh one.

We had an extra complication: we changed our branching strategy (changing our
primary branch from `develop` to `main`, and dropping `develop`), and dependabot
could not reopen the pull request because its target branch did not exist. So,
we needed an extra step: recreate the old target branch temporarily.

[gh-comment]: https://github.com/dependabot/dependabot-core/issues/6489#issuecomment-1398419569
