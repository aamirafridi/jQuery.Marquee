jQuery-Marquee
==============

jQuery plugin to scroll the text like the old traditional marquee

HTML:
-----
```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
```

CSS:
----
```css
.marquee {
  width: 300px;
  overflow: hidden;
  border:1px solid #ccc;
}
```

Apply plugin:
-------------
```javascript
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
