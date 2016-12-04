/*
Blink and Replace v1.0.0 | (c) Syed Tauhid Ahmed
Copy Rights @ Syed Tauhid Ahmed
markup: <img class="animate" src="images/a.png" replaced-image="images/b.gif" alt="" />
<script type="text/javascript">
	$(".animate").blink({
		startingDelay: 1000,
		fadeInDelay: 500,
		fadeOutDelay: 500,
		interval: 500
	});
</script>
*/
(function ( $ ) {
	$.fn.blink = function(options) {
	
		var settings = $.extend({
            // These are the defaults.
            startingDelay: 800,
            fadeInDelay: 200,
            fadeOutDelay: 100,
            interval: 200
        }, options );
		var startingDelay = settings.startingDelay;
		var fadeInDelay = settings.fadeInDelay;
		var fadeOutDelay = settings.fadeOutDelay;
		var interval = settings.interval;
		var replacedImage = $(this).attr("replaced-image");
		//if(replacedImage == "" || replacedImage == null){ replacedImage = "";}
		// first step
		this.delay(startingDelay).animate({opacity:"0"},fadeOutDelay,function(){
			$(this).delay(interval).animate({opacity:"1"},fadeInDelay,function(){
				// second step
				$(this).delay(interval).animate({opacity:"0"},fadeOutDelay,function(){
					$(this).delay(interval).animate({opacity:"1"},fadeInDelay,function(){
						// third step
						$(this).delay(interval).animate({opacity:"0"},fadeOutDelay,function(){
							$(this).delay(interval).animate({opacity:"1"},fadeInDelay,function(){
								// replace image
								$(this).delay(interval).animate({opacity:"0"},fadeOutDelay,function(){
									$(this).attr('src', replacedImage);
									$(this).animate({opacity:"1"},fadeInDelay+3500);
								});
							});
						});
					});
				});	
			});
		}); 
	};
}( jQuery ));

