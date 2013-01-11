jQuery-Marquee
==============

jQuery plugin to scroll the text like the old traditional marquee

HTML:
-----
`<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>`

CSS:
----
`.marquee {
  width: 300px;
  overflow: hidden;
  border:1px solid #ccc;
}`

Apply plugin:
-------------
`$('.marquee').marquee({
	//speed in milliseconds of the marquee
	speed: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//gap in pixels between the tickers
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left'
});`
