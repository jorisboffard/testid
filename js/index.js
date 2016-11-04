/**
 * Created by Joris Boffard
 * 03/11/2016
 */
$(document).ready(function(){

	$(".readmore").hover(
	  function() {
		    $( this ).attr("class", "button tiny_button green_blue_button uppercase readmore hand");
		  }, function() {
		    $( this ).attr("class", "button tiny_button green_blue_reverse_button uppercase readmore hand");
		  }
		);
	
	$(".signin").hover(
	  function() {
		    $( this ).attr("class", "button large_button green_blue_button hand uppercase signin");
		  }, function() {
		    $( this ).attr("class", "button large_button green_blue_reverse_button hand uppercase signin");
		  }
		);
	
	$('p.desc_news').each(function () {
		// line height in 'px'
	    var maxheight=40;
	    var showText = "More";
	    var hideText = "Less";
	    var seeMoreButton = $(this).next();
	    var text = $(this);
	    
	    // Quickly switch to auto height and remmeber that height to swith back when clicking 
	    var curHeight = text.height();
	    text.css('height', 'auto');
		var autoHeight = text.height();
		text.height(curHeight);
	    
	      if (text.height() > maxheight){
	    	  $(seeMoreButton).visible = "true";
	          text.css({ 'overflow': 'hidden','height': maxheight + 'px' });

	          $(seeMoreButton).click(function (event) {
	            event.preventDefault();

	            if (text.css('height') != 'auto') {
	            	$(seeMoreButton).fadeOut();
	            	text.animate({height:autoHeight},600);
	            }
	          });
	      }else{
	    	  $(seeMoreButton).hide();
	      }
	    });
});