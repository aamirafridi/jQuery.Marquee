/**
 * jQuery.marquee - scrolling text horizontally
 * Date: 20/02/2013
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com | http://aamirafridi.com/jquery/jquery-marquee-plugin
 */

;(function($) {
	$.fn.marquee = function(options) {
		return this.each(function() {
			// Extend the options if any provided
			var o = $.extend({}, $.fn.marquee.defaults, options),
				$this = $(this),
				$marqueeWrapper,
				containerWidth,
				animationCss,
				elWidth;
      		
			//check if element has data attributes. They have top priority
			o = $.extend({}, o, $this.data());

			//no gap if not duplicated
			o.gap = o.duplicated ? o.gap : 0;

			//wrap inner content into a div
			$this.wrapInner('<div class="js-marquee"></div>');
      
			//Make copy of the element
			var $el = $this.find('.js-marquee').css({
				'margin-right': o.gap, 
				'float':'left'
			});

			if(o.duplicated) {
				$el.clone().appendTo($this);
			}
      
			//wrap both inner elements into one div
			$this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      
			//Save the width of the each element so we can use it in animation
			elWidth = $this.find('.js-marquee:first').width() + o.gap;

			//Save the reference of the wrapper
			$marqueeWrapper = $this.find('.js-marquee-wrapper');

			//container width
			containerWidth = $this.width();

			//adjust the animation speed according to the text length
			//formula is to: (Width of the text node / Width of the main container) * speed;
			o.speed = ((parseInt(elWidth,10) + parseInt(containerWidth,10)) / parseInt(containerWidth,10)) * o.speed;

			//if duplicated than reduce the speed
			if(o.duplicated) {
				o.speed = o.speed / 2;
			}

			function pause() {
				if($.fn.pause) {
					$marqueeWrapper.pause();
					//fire event
					$this.trigger('paused');
				}
			}

			function resume() {
				if($.fn.resume) {
					$marqueeWrapper.resume();
					//fire event
					$this.trigger('resumed');
				}
			}

			//Animate recursive method
			var animate = function() {
				if(!o.duplicated) {
					$marqueeWrapper.css('margin-left', o.direction == 'left' ? containerWidth : '-' + elWidth + 'px');
					animationCss = { 'margin-left': o.direction == 'left' ? '-' + elWidth + 'px' : containerWidth };
				}
				else {
					$marqueeWrapper.css('margin-left', o.direction == 'left' ? 0 : '-' + elWidth + 'px');
					animationCss = { 'margin-left': o.direction == 'left' ? '-' + elWidth + 'px' : 0 };
				}
				//fire event
				$this.trigger('beforeStarting');
				//Start animating
				$marqueeWrapper.animate(animationCss, o.speed , 'linear', function(){
					//fire event
					$this.trigger('finished');
					//animate again
					if(o.pauseOnCycle) {
						setTimeout(animate, o.delayBeforeStart);
					}
					else {
						animate();
					}
				});
			};
			
			//bind pause and resume events
			$this.on('pause', pause);
			$this.on('resume', resume);

			if(o.pauseOnHover) {
				$this.hover(pause, resume);
			}
			//Starts the recursive method
			setTimeout(animate, o.delayBeforeStart);
	
		});
	};//End of Plugin
	
	// Public: plugin defaults options
	$.fn.marquee.defaults = {
		//speed in milliseconds of the marquee
		speed: 5000,
		//gap in pixels between the tickers
		gap: 20,
		//pause time before the next animation turn
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: false,
		//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
		pauseOnHover: false,
		//on cycle pause the marquee
		pauseOnCycle: false
	};
})(jQuery);
