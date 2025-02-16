# jQuery-Marquee with CSS3 Support

[![Known Vulnerabilities](https://snyk.io/test/github/aamirafridi/jquery.marquee/badge.svg?targetFile=package.json)](https://snyk.io/test/github/aamirafridi/jquery.marquee?targetFile=package.json)
[![](https://data.jsdelivr.com/v1/package/npm/jquery.marquee/badge)](https://www.jsdelivr.com/package/npm/jquery.marquee)

A small jQuery plugin to scroll the text like the old traditional marquee.

Install:
----
 - **NPM:** `npm install jquery.marquee --save`
 - **CDN:** [jsdelivr.com](http://www.jsdelivr.com/#!jquery.marquee)
```html
<script src="//cdn.jsdelivr.net/npm/jquery.marquee@1.6.1/jquery.marquee.min.js" type="text
/javascript"></script>
```
- **Bower**: `bower install jQuery.Marquee`
- **Download:** [zip](https://github.com/aamirafridi/jQuery.Marquee/archive/master.zip)

Links:
-----
 - **jsFiddle:** http://jsfiddle.net/aamir/jc7F3/285/ to help you explain any issues you might face.

Options:
--------
 - **allowCss3Support** Force the usage of jQuery's animate method even if the target browser supports CSS3 animations. Default: ```true```
 - **css3easing** Works when ```allowCss3Support``` is set to ```true```. See [here](http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function) for full list. Default: ```'linear'```
 - **easing** Requires the jQuery [easing](http://gsgd.co.uk/sandbox/jquery/easing/) plugin. Default: ```'linear'```
 - **delayBeforeStart** Time in milliseconds before the marquee starts animating. Default: ```1000```
 - **direction** Direction towards which the marquee will animate ```'left' / 'right' / 'up' / 'down'```. Default: ```'left'```. Todo: need to change this to ```ltr/rtl``` etc
 - **duplicated** Should the marquee be duplicated to show an effect of continuous flow. Use this only when the text is shorter than the container. Default: ```false```
 - **duplicateCount** The number of duplicates to be added. Default: ```1```
 - **duration** Duration in milliseconds in which you want your element to travel. Default: ```5000```.
 - **speed** Speed will override duration. Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels per second.
 - **gap** Gap in pixels between the tickers. Will work only when the ```duplicated``` option is set to ```true```. Default: ```20```. Note: ```20``` means ```20px``` so no need to use ```'20px'``` as the value.
 - **pauseOnHover** Pause the marquee on hover. If the browser supports CSS3 and ```allowCss3Support``` is set to ```true``` this will be done using CSS3. Otherwise this will be done using the jQuery [Pause](https://github.com/tobia/Pause) plugin. Default: ```false```. See demo page for example.
 - **pauseOnCycle** On cycle, pause the marquee for ```delayBeforeStart``` milliseconds.
 - **startVisible** The marquee will be visible from the start if set to `true`. Thanks to @nuke-ellington 👍

Events:
------
 - **beforeStarting:** Event will be fired on the element before animation starts.
 - **finished:** Event will be fired on the element after the animation finishes.
 - **paused:** Event will be fired on the element when the animation is paused.
 - **resumed:** Event will be fired on the element when the animation is resumed.

Methods:
---------------

These methods can be used like this:

 - First initialize marquee with any options ``` var $mq = $('.marquee').marquee();```
 - Then at any time you can call the following methods like this: ```var $mq.marquee('NAME-OF-METHOD-AS-STRING');```

Here is the list of all methods:

 - **pause**: To pause the marquee at any time.
 - **resume**: To resume the marquee after being paused previously.
 - **toggle**: To toggle between pause and resume methods.
 - **destroy**: To remove the marquee from your element. This method is useful if you are loading/changing the data using Ajax or just another string. You can combine this with the ```finished``` event so you can have the marquee show some data and as soon as it finishes showing that, you can destroy it, change the html and then apply the plugin again. See the demo page for details (links provided above).

Usage:
----
### Requiring in The Node.js Environment
Here's how to import the plugin as a CommonJS module:

```javascript
var $ = require("jquery");
require("jquery.marquee");
```

### HTML:

Usually you assign the marquee class to the desired element. Then you initialize it with an options hash in your code (see below).

```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
```

Alternatively you can provide all the options listed above as data attributes:

```html
<div class='marquee' data-duration='5000' data-gap='10' data-duplicated='true' >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit END.
</div>
```

### CSS:
```css
.marquee {
  width: 300px; /* the plugin works for responsive layouts so width is not necessary */
  overflow: hidden;
  border:1px solid #ccc;
}
```

### How to Apply Plugin:
```javascript
/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
	//duplicate the message three times
	duplicateCount: 3
});
```

### How to Use in a React Component (Class-Based)
```jsx
import React, { Component } from 'react';
import $ from 'jquery';
import  'jquery.marquee';

class Marquee extends Component {
  componentDidMount() {
    this.$el.marquee({
      duration: 15000,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left'
    });
  }

  render() {
    return (
      <div ref={(el) => this.$el = $(el)}>
        I'm using jQuery.Marquee with React!!!!
      </div>
    );
  }
}
```

### How to Use in a React Component (Functional)
```jsx
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import  'jquery.marquee';

function Marquee(props) {
  const el = useRef();

  useEffect(function() {
    const $el = $(el.current);

    $el.marquee({
      duration: 5000,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left'
    });
  });

  return (
    <div ref={el}>
      I'm using jQuery.Marquee with React!!!!
    </div>
  );
}
```

### How to Use Methods:

```javascript
var $mq = $('.marquee').marquee();
$('.someLink').click(function(){
  $mq.marquee('pause/resume/toggle');
});
```

Change content and re-apply the plugin.

```javascript
$('.marquee')
	.bind('finished', function(){
		//Change text to something else after first loop finishes
		$(this).marquee('destroy');
		//Load new content using Ajax and update the marquee container
		$(this).html('Some new data loaded using ajax')
			//Apply marquee plugin again
			.marquee()
	})
	.marquee();

```

### How to Use Events:

```javascript
$('.marquee')
    .bind('beforeStarting', function () {
        //code you want to execute before starting the animations
    })
    .bind('finished', function () {
        //code you want to execute before after each animation loop
    })
    //Apply plugin
    .marquee({
        duration: 2000
    });
```

---

Images:
------
If you are using images in marquee, sometimes the plugin cannot calculate accurate widths while images are still loading. You can try this instead of ```$(document).ready(function(){...})```

```javascript
//if you have images in marquee
$(window).load(function() {
    $('.marquee').marquee();
});
```
----


Updates:
-----------

**Update (2 Jan 2025):**
Added the `duplicateCount` parameter to control the number of duplicates that will be added when `duplicate` is `true`. Thanks to @tip2tail.

**Update (8 Mar 2016):**
Now plugin have new option: **startVisible** The marquee will be visible in the start if set to `true`. Thanks to @nuke-ellington 👍

**Update (24 Jan 2014):**

**Note: people who been asking me how to use this plugin with content being loaded with Ajax, please read notes about this update.**

 - New methods added, so now after you start the plugin using ```var $mq = $('.marquee').marquee();```, then you can pause, resume, toggle(pause, resume) and destroy methods e.g to remove the marquee plugin from your element simply use ```$mq.marquee('destroy');```. Similarly you can use pause the marquee any time using ```$mq.marquee('pause');```.
 - If you want to use use **Ajax** with this plugin i.e you want to change the content after you apply this plugin, please see the examples in demo page (link provided below).

 - Also made some changes so this plugin works with old versions of jQuery. I have tested it with jQuery 1.3.2 but quite sure it should work with some previous versions of jQuery.

**PLEASE report any bugs that you may find.**

**Update (20 Dec 2013):**
Now the plugin will detect if browser supports CSS3 animations than it will animate the element using CSS3 which will perform much better than animating using jQuery.

The ```pauseOnHover``` also works using CSS3. The plugin just prepares the setup and required CSS3 animation CSS.

Due to some reasons if you want plugin to animate always using jQuery than you need to set ```allowCss3Support``` option to ```false```. Also an extra option ```css3easing``` is added.

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
 - The plugin is improved to adjust the speed according to the length of the text automatically. For more details read: https://github.com/aamirafridi/jQuery.Marquee/issues/1
 - 'duplicated' option added. See the details below in Options section.
