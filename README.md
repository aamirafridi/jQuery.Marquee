jQuery-Marquee
==============

A **1.3kb** jQuery plugin to scroll the text like the old traditional marquee

Update (21 Aug 2013):
---------------------
If you want to hide the marquee for certain devices, try using ``` visibility: hidden``` with ``` height: 0``` & ```position: absolute``` instead of ``` display: none``` because jQuery cannot calculate with width etc of hidden elements.
For more details: 
 - https://github.com/aamirafridi/jQuery.Marquee/issues/9
 - http://stackoverflow.com/questions/1841124/find-the-potential-width-of-a-hidden-element

Update (22 Feb 2013):
---------------------
 - pauseOnHover option added. Please note that you will need to include jQuery pause plugin: https://github.com/tobia/Pause before the jQuery Marquee plugin.

Update (20 Feb 2013):
--------------------
 - The plugin is improved to adjust the speed according to the lenth of the text automatically. For more details read: https://github.com/aamirafridi/jQuery.Marquee/issues/1
 - 'duplicated' option added. See the details below in Options section.

Options:
--------
 - **speed:** Speed in milliseconds of the marquee. Please make note that same speed value will react differently for text with different lengths. Default is 10000.
 - **gap:** Gap in pixels between the tickers. Default is 20.
 - **delayBeforeStart:** Time in milliseconds before the marquee starts animating. Default is 1000
 - **direction:** Direction towards which the marquee will animate 'left' or 'right'. Default is 'left'.
 - **duplicated:** true or false - should the marquee be duplicated to show an effect of continues flow. Default is false.
 - **pauseOnHover:** true or false - pause the animation on mouse hover. Please note that you will need to include jQuery pause plugin: https://github.com/tobia/Pause before the jQuery Marquee plugin.

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

Use:
----

###HTML:

```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
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
	speed: 15000,
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
  $mq.trigger('pause')
});
```

```javascript
var $mq = $('.marquee').marquee();
$('.someLink').click(function(){
  $mq.trigger('resume');
});
```
