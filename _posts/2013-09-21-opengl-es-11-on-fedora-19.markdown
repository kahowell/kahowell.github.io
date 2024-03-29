---
title: OpenGL ES 1.1 on Fedora 19
tags: [c, c++, fedora, gles, opengl, rpm]
permalink: /2013/09/opengl-es-11-on-fedora-19.html
layout: post
---
So, I've been tinkering with [SDL2](http://www.libsdl.org/) lately; I've been
very impressed by the number of features that have been added without changing
the overall API architecture much. One of the additions that I find most
impressive is the Android/iOS support.

In tinkering, I realized one can theoretically build with a SDL game/app with
both GL and GLES backends (without a lot of platform-specific code), allowing
you to write a 3D engine that works on both desktop and mobile platforms. Very
cool! I have yet to dive into the differences between GL and GLES, but I have
the feeling it is possible to code (for the most part) for the middle ground.

Along the way, I noticed that mesa includes GLES implementations. Also very
cool! However, the default mesa packages on Fedora have disabled the GLES 1.1
features. A little bit of google-fu later, I find the package maintainers have
chosen to disable GLES 1.1 in the build with very sound reasoning:
> [Drop GLESv1, nothing's using it, let's not start][fedora-mail]

They basically want to discourage folks from using this dated API; you
really should use GLES 2.0, as GLES 2.0 is only unavailable on a few older
platforms (see http://en.wikipedia.org/wiki/OpenGL_ES#Use).

[fedora-mail]: https://lists.fedoraproject.org/pipermail/package-announce/2013-June/107200.html

I imagine this might have been a choice to prevent new software from appearing
in Fedora which uses GLES 1.1, thereby preventing anyone from needing to
maintain/support GLES 1.1 on Fedora, but I haven't spoken with any of those
folks, so I'm not certain this is the exact meaning of their reasoning.

There are a few use cases for having GLES 1.1 available; for example, you are
developing an app for an older OS for some reason. I think if you are in a
situation where you need it, you are probably smart/experienced enough to be
comfortable building the mesa libs from source in order to keep GLES 1.1. My
curiosity led me to try it out -- notes follow.

It's not difficult to build an RPM package from source; a pretty good reference
for the basics is
[here](http://fedoraproject.org/wiki/How_to_create_an_RPM_package).

So first, you want to install the mesa source RPM:

    yumdownloader --source mesa-libGLES-devel; rpm -i mesa-*.src.rpm

Next, you need to install the build dependencies:

    cd ~/rpmbuild/SPECS; sudo yum-builddep mesa-libGLES-devel

After that you'll want to patch the SPEC file to build the GLES 1.1 stuff (git
diff shown):

{% highlight diff %}
diff --git a/mesa.spec b/mesa.spec
index 40c45f5..7540fe4 100644
--- a/mesa.spec
+++ b/mesa.spec
@@ -342,7 +342,7 @@ export CXXFLAGS="$RPM_OPT_FLAGS -fno-rtti -fno-exceptions"
     --enable-osmesa \
     --with-dri-driverdir=%{_libdir}/dri \
     --enable-egl \
-    --disable-gles1 \
+    --enable-gles1 \
     --enable-gles2 \
     --disable-gallium-egl \
     --disable-xvmc \
@@ -440,6 +440,9 @@ rm -rf $RPM_BUILD_ROOT
 %files libGLES
 %defattr(-,root,root,-)
 %doc docs/COPYING
+%{_libdir}/libGLESv1_CM.so
+%{_libdir}/libGLESv1_CM.so.1
+%{_libdir}/libGLESv1_CM.so.1.*
 %{_libdir}/libGLESv2.so.2
 %{_libdir}/libGLESv2.so.2.*

@@ -536,6 +539,11 @@ rm -rf $RPM_BUILD_ROOT

 %files libGLES-devel
 %defattr(-,root,root,-)
+%dir %{_includedir}/GLES
+%{_includedir}/GLES/egl.h
+%{_includedir}/GLES/gl.h
+%{_includedir}/GLES/glext.h
+%{_includedir}/GLES/glplatform.h
 %dir %{_includedir}/GLES2
 %{_includedir}/GLES2/gl2platform.h
 %{_includedir}/GLES2/gl2.h
@@ -544,6 +552,7 @@ rm -rf $RPM_BUILD_ROOT
 %{_includedir}/GLES3/gl3.h
 %{_includedir}/GLES3/gl3ext.h
 %{_libdir}/pkgconfig/glesv2.pc
+%{_libdir}/pkgconfig/glesv1_cm.pc
 %{_libdir}/libGLESv2.so

 %files libOSMesa
{% endhighlight %}

Now, build the RPMs:

    rpmbuild -ba mesa.spec

Now, install the RPMs (architecture may differ, --force will overwrite
installed packages):

    cd ../RPMS/x86_64/; sudo rpm -i --force mesa-*.rpm

Obviously, it may pay to be a little more selective with which ones you
install, if you care.
