jQuery-Marquee
==============

jQuery plugin to scroll the text like the old traditional marquee

Options:
--------
 - **speed:** Speed in milliseconds of the marquee. Please make note that same speed value will react differently for text with different lengths. Default is 10000.</li>
 - **gap:** Gap in pixels between the tickers. Default is 20</li>
 - **delayBeforeStart:** Time in milliseconds before the marquee starts animating. Default is 1000</li>
 - **direction:** Direction towards which the marquee will animate 'left' or 'right'. Default is 'left'</li>

Use:
----

###HTML:

```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
```

###CSS:
```css
.marquee {
  width: 300px;
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
	//gap in pixels between the tickers
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left'
});
```
