jQuery(function($) {

});


function func() {
	
	
	/*$('.grid_12 h2')
	
	.hide(1000)
	.fadeIn(500)
	.queue(function() {
		$(this).text('Some text!');
		$(this).dequeue();
	})
	//.stop()
	.animate({'fontSize':'100px'})
	.slideUp(300)
	.show(400)
	
	;*/
	
	$('.grid_12 h2')
	.queue('myqueue',function() {
		
		
		$(this).animate({'fontSize':'100px'})
		$(this).dequeue('myqueue');
		
	})
	.delay(1000,'myqueue')
	.queue('myqueue',function() {
		
		
		$(this).text('Some text!');
		$(this).dequeue('myqueue');
		
	})
	.queue('myqueue',function() {
		
		
		$(this).hide(700).show(700);
		$(this).dequeue('myqueue');
		
	})
	;
	$('.grid_12 h2').dequeue('myqueue');
	
	/*var slideWidth = $('.slide-item').outerWidth();
	
	var slideWrap = $('.slide-wrap');
	
	var scrollSlider = slideWrap.position().left - slideWidth;/// 0-200 = -200
	
	function sl() {
		
		slideWrap.animate({
						'left':scrollSlider						
						},1000,'linear',function() {
							slideWrap.find('.slide-item:first')
							.appendTo(slideWrap)
							.parent()
							.css({'left':0})
							;
						});
	}
	
	
	setInterval(sl,2000);*/
	
	
	//var img = $('.grid_4 img');
	
	/*img.fadeTo(1000,1,function() {
		
		
	});*/
	
	/*img.fadeToggle({
		
		duration:'fast',
		easing:'linear',
		complete:function() {
			
		},
		queue:'fx'
		
	});*/// display:none
	
	/*if(img.css('display') !== 'none') {
		img.fadeOut('fast',function() {
			
			var text = $('<p style="margin:100px;font-size:1.4em;" id="mytext">Some text!!!</p>');
			
			text.insertAfter($(this)).hide().show(1000);
			
		});//600 400 200
	}
	else {
		
		$('#mytext').hide(500,'swing',function() {
			
			img.fadeIn(1000);
			$(this).remove();
			
		});
		
	}*/
	
	
}

