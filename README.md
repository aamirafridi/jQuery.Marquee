jQuery-Marquee with CSS3 Support
==============

A **3.5kb** minified jQuery plugin to scroll the text like the old traditional marquee

Update (20 Dec 2013):
--------------------
Now the plugin will detect if browser supports CSS3 animations than it will animate the element using CSS3 which will perform much better than animating using jQuery.

The ```pauseOnHover``` also works using CSS3. The plugin just prepares the setup and required CSS3 animation CSS.

Due to some reasons if you want plugin to animate always using jQuery than you need to set ```allowCss3Support``` option to ```false```. Also an extra option ```css3easing``` is added.

**PLEASE report any bugs you find.**

For details please check the demos  http://jquery.aamirafridi.com/jquerymarquee/

----

Options:
--------
 - **allowCss3Support** If you wish the plugin should animate always using jQuery animate method even if browser supporst CSS3 animations. Default is ```true```
 - **css3easing** Works when ```allowCss3Support``` is set to ```true``` - for full list see: http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function . Default is ```'linear'```
 - **easing** Requires jQuery easing plugin http://gsgd.co.uk/sandbox/jquery/easing/. Default is ```'linear'```
 - **delayBeforeStart** Time in milliseconds before the marquee starts animating. Default is ```1000```
 - **direction** Direction towards which the marquee will animate ```'left' / 'right' / 'up' / 'down'```. Default is ```'left'```. Todo: need to change this to ```ltr/rtl``` etc
 - **duplicated** Should the marquee be duplicated to show an effect of continues flow. Use this only with the text is shorter than the container. Default is ```false```
 - **duration** Duration in milliseconds in which you want your element to travel. Default is ```5000```. This option is the old ```speed``` option which still works but duration is the more word.
 - **gap** Gap in pixels between the tickers. Will work only when the ```duplicated``` option is set to ```true```. Default is ```20```. Note: ```20``` means ```20px``` so no need to use ```'20px'``` as the value.
 - **pauseOnHover** On hover pause the marquee. If browser supports CSS3 and ```allowCss3Support``` is set to ```true``` than it will be done using CSS3. Otherwise this will be done using jQuery plugin https://github.com/tobia/Pause. Default is ```false```
 - **pauseOnCycle** On cycle, pause the marquee for ```delayBeforeStart``` milliseconds.

Events:
------
 - **beforeStarting:** Event will be fired on the element before animation starts.
 - **finished:** Event will be fired on the element after the animation finishes.
 - **pause:** Fire this event on the element when you want to pause the animation, for example when you click/hover a link.
 - **paused:** Event will be fired on the element when the animation is paused.
 - **resume:** Fire this event on the element when you want to resume, the paused animation.
 - **resumed:** Event will be fired on the element when the animation is resumed.

Demo & blog post:
-----
 - **Demo:** http://jquery.aamirafridi.com/jquerymarquee/
 - **Blog post:** http://aamirafridi.com/jquery/jquery-marquee-plugin
 - **jsFiddle:** http://jsfiddle.net/aamir/jc7F3/1/ to help you explain any issues you might face.

Usage:
----

###HTML:

```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
```

or use this if you want to start the plugin with no options but use data attributes:

```html
<div class='marquee' data-duration='5000' data-gap='10' data-dupilcated='true' >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit END.
</div>
```


###CSS:
```css
.marquee {
  width: 300px; /* the plugin works for responsive layouts so width is not necessary */
  overflow: hidden;
  border:1px solid #ccc;
}
```

###Apply plugin:
```javascript
/**
 * Example of starting a plugin with options.
 * I am just passing all the default options
 * so you can just start the plugin using $('.marquee').marquee();
*/
$('.marquee').marquee({
	//speed in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});
```

###How to use events:

```javascript
var $mq = $('.marquee').marquee();
$('.someLink').click(function(){
  $mq.trigger('pause');
});
```

```javascript
var $mq = $('.marquee').marquee();
$('.someLink').click(function(){
  $mq.trigger('resume');
});
```

---

Old updates:
-----------

**Update (27 Nov 2013):**
Easing option added. Requires jQuery easing plugin.

**Update (22 Nov 2013):**
Now plugin supports the 'up' and 'down' directions. Please have a look at the example to see how to use.

**Update (21 Aug 2013):**
If you want to hide the marquee for certain devices, try using ``` visibility: hidden``` with ``` height: 0``` & ```position: absolute``` instead of ``` display: none``` because jQuery cannot calculate with width etc of hidden elements.
For more details:
 - https://github.com/aamirafridi/jQuery.Marquee/issues/9
 - http://stackoverflow.com/questions/1841124/find-the-potential-width-of-a-hidden-element

**Update (22 Feb 2013):**
```pauseOnHover``` option added. Please note that you will need to include jQuery pause plugin: https://github.com/tobia/Pause before the jQuery Marquee plugin.

**Update (20 Feb 2013):**
 - The plugin is improved to adjust the speed according to the lenth of the text automatically. For more details read: https://github.com/aamirafridi/jQuery.Marquee/issues/1
 - 'duplicated' option added. See the details below in Options section.
