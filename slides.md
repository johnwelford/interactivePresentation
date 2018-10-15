<section class="master client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
# Interactive presentation techniques


This is a demonstration presentation created in html using the [reveal.js](https://revealjs.com) framework.

It tests out some advanced techniques to enable audience interactivity and participation,
as well as exploring some more engaging aspects of presentation structure.

There are also loads of cool [plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) for Reveal.

---

## Navigation
#### (Press down)


Combining vertical scrolling with horizontal allows similar ideas to be grouped together in short sections.

Whilst still allowing fast progress if the presenter wishes to skip certain details.

Sliding transitions help to show the distinction.

</script></section><section class="master" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Audience view


Giving your audience access to your presentation on their own device is pretty cool, 
especially if it contains interactive elements.

This is possible using the reveal.js [multiplexing](https://github.com/hakimel/reveal.js#multiplexing") feature.

To avoid having to develop two versions simultaneously it is worth developing the bulk of the presentation prior to splitting into master and client versions.
Or alternatively maintain your slide details separately from your setup by using the [external](https://github.com/janschoepke/reveal_external) plugin,
then reuse the slides in both the client and master files.

You may want to [load fragments](https://github.com/G1305/reveal_external#load-fragments") of the external file so that there can be slight differences between the master and client versions.


Try opening an [example client](client.html#/2/2) version of this *master* presentation in a separate window.

Keyboard, touch, and button navigation can be disabled within the client such that progression is completely slaved to the master.


The client presentation will need to be hosted on a server where your audience can access it. 
Including the URL on the title slide will allow the audience to load it up before the presentation starts.

This technique will be necessary when we come to implement the next ideas.

</script></section><section class="client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Audience view


Giving your audience access to your presentation on their own device is pretty cool, 
especially if it contains interactive elements.

This is possible using the reveal.js [multiplexing](https://github.com/hakimel/reveal.js#multiplexing) feature.

To avoid having to develop two versions simultaneously it is worth developing the bulk of the presentation prior to splitting into master and client versions.
Or alternatively maintain your slide details separately from your setup by using the [external](https://github.com/janschoepke/reveal_external) plugin,
then reuse the slides in both the client and master files.
        
You may want to [load fragments](https://github.com/G1305/reveal_external#load-fragments) of the external file so that there can be slight differences between the master and client versions.


This is the *client* presentation, with all navigation disabled.

Slides are based on the same [external](https://github.com/janschoepke/reveal_external) file, but with certain changes for the client by using [load fragments](https://github.com/G1305/reveal_external#load-fragments) CSS selections.


The client presentation will need to be hosted on a server where your audience can access it.
Including the URL on the title slide will allow the audience to load it up before the presentation starts.

This technique will be necessary when we come to implement the next ideas.				

</script></section><section class="master client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Interactive slides


Reveal.js allows the inclusion of [web pages as slide backgrounds](https://github.com/hakimel/reveal.js#iframe-backgrounds).
With the addition of the `data-background-interactive` attribute the presenter or audience will be able to interact with the web page.
This allows both for both demonstration and audience involvement without having to leave the presentation.

It's worth noting that,
once the interactive background has been clicked upon, 
you will only be able to navigate off the slide using the on-screen arrows
(so don't turn these off!).


<!-- .slide: data-background-iframe="http://mbtaviz.github.io/" -->
</script></section><section class="master" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Live polls


Now that the audience has your presentation on their own device,
why not find out what they're thinking?

There are [quite a few](https://www.presentation-guru.com/how-to-get-instant-feedback-from-your-audience/) tools out there that allow you to include polls and quizes to get instant feedback within a presentation.
Unfortunately most of these require the use of particular presentation software,
and the slicker ones also charge a fee for commercial use.

We'll look at pulling the appropriate parts of [directpoll](http://directpoll.com/) questions and answers into our presentation.
This is free and supports up to 500 voters,
however the technique should work for other web-based services as well.

First go to [directpoll.com](http://directpoll.com/) and set up a poll with one or more questions.
Once you save it you will get a few different links to the poll which you can embed in the presentation.


On this slide we use a hidden `iframe` that includes the directpoll 'Stop and reset poll now' URL (in the advanced links section) in order to reset the poll each time the presentation is run.

The next two slides in the master presentation (this is the *master*) will be the question and results,
based on using lazy loading along with the directpoll 'Step to a specific question and show result' URLs.

The next two slides in the [client](client.html#/4/2) will be the polling form, based on the directpoll 'Vote' link.
<!-- This is hidden and also not lazy-loaded, so that it only runs and resets when the slides are opened/refreshed. Switching to lazy-loading would reset results every time this slide was returned to. -->
<iframe src="https://directpoll.com/r?XDbzPBdIoNwJmL00qMv6S4ik6XT6wI4d2NnMmPcIrBx" style="width:0; height:0; border:0; border:none; display:none !important"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/r?XDbzPBdJ2bAX0ZEE4a9KgIwyKlhKAWIrGb1a0dqW5PB" style="pointer-events: none;"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/r?XDbzPBdJ3cBY1aFF5bALhJxzLmiLBXJsHc2b1erX6QC" style="pointer-events: none;"></iframe>


In this *master* slide there is a hidden `iframe` to prompt a question with lots of answers but not show the results.

This allows people to vote in an unbiased way on the client slide,
and also allows the presentation to be used to display the question however we like.

On the next slide we can then show the results,
in both the master and client presentations,
using the directpoll 'Result of a specific question' URL.
It is worth ensuring that these have `style="pointer-events: none;"` so that the audience do not receive control of the poll.
<iframe data-src="https://directpoll.com/r?XDbzPBdJ4dCZ2bGG6cBMiKy0MnjMCYKtId3c2fsY7RD" style="width:0; height:0; border:0; border:none; display:none !important"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/r?XDbzPBdXCR2KAcVRBWvJgXKpMypU7g8dCOBd1Rsa0S" style="pointer-events: none;"></iframe>

</script></section><section class="client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Live polls


Now that the audience has your presentation on their own device,
why not find out what they're thinking?

There are [quite a few](https://www.presentation-guru.com/how-to-get-instant-feedback-from-your-audience/) tools out there that allow you to include polls and quizes to get instant feedback within a presentation.
Unfortunately most of these require the use of particular presentation software,
and the slicker ones also charge a fee for commercial use.

We'll look at pulling the appropriate parts of [directpoll](http://directpoll.com/) questions and answers into our presentation.
This is free and supports up to 500 voters,
however the technique should work for other web-based services as well.

First go to [directpoll.com](http://directpoll.com/) and set up a poll with one or more questions.
Once you save it you will get a few different links to the poll which you can embed in the presentation.


The next two slides in the master presentation (this is the *client*) will be the question and results,
based on using lazy loading along with the directpoll 'Step to a specific question and show result' URLs.

The next two slides in this client will be the polling form,
based on the directpoll 'Vote' link.


<iframe class="stretch" data-src="https://directpoll.com/v?XDVhEtZQ2NsM2ggGvXIrBxCc3F8gRoT0"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/v?XDVhEtZQ2NsM2ggGvXIrBxCc3F8gRoT0"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/v?XDVhEtZQ2NsM2ggGvXIrBxCc3F8gRoT0"></iframe>


<iframe class="stretch" data-src="https://directpoll.com/r?XDbzPBdXCR2KAcVRBWvJgXKpMypU7g8dCOBd1Rsa0S" style="pointer-events: none;"></iframe>

</script></section><section class="master" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Questionnaires


What if we want to ask our audience multiple questions at once?
Well we could perhaps present them with a [Google forms](https://www.google.com/forms/about/) questionnaire to fill in.

The next [client](client.html#/5/1) slide (this is the *master*) shows an example embedded form.
Unfortunately it is tricky to make charts based on the results auto-refresh,
so the master slide simply shows a prompt.
Finally the results are shown in a chart generated from the form responses on both the master and client final slide.


Please fill in the questionnaire shown in your [client](client.html#/5/1) slide.


<iframe width="870" height="540" seamless frameborder="0" scrolling="no" data-src="https://docs.google.com/spreadsheets/d/12I8RKeBScEoF9o-slDsIhvzrpD1SuYl6VMduCOmqjCE/htmlembed/sheet?gid=2094764228&range=F4"></iframe>

</script></section><section class="client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## Questionnaires


What if we want to ask our audience multiple questions at once?
Well we could perhaps present them with a [Google forms](https://www.google.com/forms/about/) questionnaire to fill in.

The next client slide (this is the *client*) shows an example embedded form.
Unfortunately it is tricky to make charts based on the results auto-refresh,
so the master slide simply shows a prompt.
Finally the results are shown in a chart generated from the form responses on both the master and client final slide.


<!-- .slide: data-background-iframe="https://docs.google.com/forms/d/e/1FAIpQLSdBCfmzgmcmsbZhWs-BR6l49-nYMydSY_pfTMe3Xbubhq5kAQ/viewform" -->


<iframe width="870" height="540" seamless frameborder="0" scrolling="no" data-src="https://docs.google.com/spreadsheets/d/12I8RKeBScEoF9o-slDsIhvzrpD1SuYl6VMduCOmqjCE/htmlembed/sheet?gid=2094764228&range=F4"></iframe>

</script></section><section class="master client" data-markdown data-separator-vertical="^\r?\n\r?\n"><script type="text/template">
## SVG fragments


Reveal.js provides some neat features for highlighting elements on a slide called [fragments](https://github.com/hakimel/reveal.js#fragments).

Unfortunately this does not work with svg files.

However, some improvements to a [reveal-inline-svg](https://github.com/ranr01/reveal-inline-svg) plugin allow us to achieve this.

The next slide demonstrates a range of fragments operating on both text and SVG simultaneously.

<small>Note that for the fragment CSS to be able to override the SVG values,
SVG must be styled using attributes rather than inline styles.
If generating from Inkscape then there is an option for this when saving as 'Optimised SVG'.</small>


<div style="position: absolute; right: 0px; top: 0px;">
    <object data="drawingOpt.svg" type="image/svg+xml" onload="makeInline(this)">
        <param id="greenStar" class="fragment grow" data-fragment-index="1">
        <param id="redRect" class="fragment shrink" data-fragment-index="2">
        <param id="yellowCirc" class="fragment fade-out" data-fragment-index="3">
        <param id="turqStar" class="fragment fade-up" data-fragment-index="4">
        <param id="orangeEllip" class="fragment fade-in-then-out" data-fragment-index="5">
        <param id="greyRect" class="fragment fade-in-then-semi-out" data-fragment-index="6">
        <param id="blackCirc" class="fragment fill-current-blue" data-fragment-index="7">
        <param id="blackStar" class="fragment fill-red" data-fragment-index="8">
        <param id="purpleCurve" class="fragment stroke-green" data-fragment-index="9">
        <param id="greenSpir" class="fragment stroke-blue" data-fragment-index="10">
    </object>
</div>
<small style="display: block;">
- grow green star <!-- .element: class="fragment grow" data-fragment-index="1" -->
- shrink red square <!-- .element: class="fragment shrink" data-fragment-index="2" -->
- fade-out yellow circle <!-- .element: class="fragment fade-out" data-fragment-index="3" -->
- fade-up turquoise star <!-- .element: class="fragment fade-up" data-fragment-index="4" -->
- fade in, then out orange ellipse <!-- .element: class="fragment fade-in-then-out" data-fragment-index="5" -->
- fade in grey rect, then obfuscate <!-- .element: class="fragment fade-in-then-semi-out" data-fragment-index="6" -->
- temporarily fill the black circle blue <!-- .element: class="fragment highlight-current-blue" data-fragment-index="7" -->
- fill the black star red <!-- .element: class="fragment highlight-red" data-fragment-index="8" -->
- turn the purple curve green <!-- .element: class="fragment highlight-green" data-fragment-index="9" -->
- turn the green spiral blue <!-- .element: class="fragment highlight-blue" data-fragment-index="10" -->

 
</small>

---

## Element zoom
#### (Not yet working...)


Reveal.js comes with [zoom.js](https://lab.hakim.se/zoom-js/) built in.
By default this allows click zooming of preset extent on the clicked point.

We can change use this to zoom to fixed elements within a slide,
including SVG elements that have been included inline.
These elements don't even need to be visible,
and therefore we can use hidden boxes to group areas of an image.

By embedding these zoom requests within a fragment we can step through and highlight speific areas of complex slides.


<div style="position: absolute; right: 0px; top: 0px;">
    <object data="drawingOpt.svg" type="image/svg+xml" onload="makeInline(this)">
   </object>
</div>
<small style="display: block;">
- zoom to green star <!-- .element: class="fragment fade-in" data-fragment-index="1" data-zoom="greenStar" -->
- zoom to black star <!-- .element: class="fragment fade-in" data-fragment-index="2" data-zoom="blackStar" -->
- zoom back out <!-- .element: class="fragment fade-in" data-fragment-index="3" data-zoom="" -->
- zoom to top half <!-- .element: class="fragment fade-in" data-fragment-index="4" data-zoom="" -->

 
</small>

---

## Automatic timings


Sometimes it would be useful for slides to advance automatically once another aspect is complete.
For example, you may wish to only allow a short period for questionnaire responses.

Reveal.js conveniently allows [auto-sliding](https://github.com/hakimel/reveal.js#auto-sliding) built in.
If we leave this set to 0 for the whole presentation (default = manual transitions) we can still enable it for single slides by setting `data-autoslide="5000"` for the slide or fragments within it.


This slide will automatically transition in 5 seconds. <!-- .slide: data-autoslide="5000" -->


We can also add a countdown timer so that the audience knows what's happening.

This slide will automatically transition in... <!-- .slide: data-autoslide="8000" -->

<div id="countdown">
  <div id="countdown-number"></div>
  <svg>
    <circle r="65" cx="75" cy="75"></circle>
  </svg>
</div>
<small>Timer based on the codepen [here](https://codepen.io/carsy/pen/VvqJwm) by Zé Bateira.</small>

---

## Explorable explanations
#### (Not yet tested...)


Look at using [reveal.js-d3](https://gcalmettes.github.io/reveal.js-d3/demo/#/).

</script></section>