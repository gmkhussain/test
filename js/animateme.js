$(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
  
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');
        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });

    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });
});












        jQuery(document).ready(function() {
            jQuery('.anime-in').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
                offset: 100    
               });   

            jQuery('.anime-left').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
                offset: 100    
               });
		   
            jQuery('.anime-right').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   
			jQuery('.anime-up').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
                offset: 100    
               });
			   
			jQuery('.anime-down').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
                offset: 100    
               });


  			jQuery('.anime-zoomIn').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
                offset: 100    
               });   
		

	   
			jQuery('.anime-pulse').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated pulse', // Class to add to the elements when they are visible
                offset: 100    
               });   
			      
			jQuery('.anime-flipInY').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated flipInY', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   
			jQuery('.anime-flipInX').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
                offset: 100    
               }); 
			   
			jQuery('.anime-hinge').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated hinge', // Class to add to the elements when they are visible
                offset: 100    
               });   
			   

			jQuery('.anime-bounceInDown').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
                offset: 100    
               });  

            jQuery('.anime-flash').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
                offset: 100    
               });   

            jQuery('.bounceInDown').addClass("hidden2").viewportChecker({
                classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
                offset: 100    
               }); 
		});




























////////XTRA GPv3 SCRIPTS /////
$('.carousel').carousel({
  interval: 8000
})


/*
//Multipal slide//
$('.testimoCarousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
  
});






//Clients Slider
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});


//Inner Pages Filler Script
$(function () {
    $(window).scroll(function () {
        var $myDiv = $('.fill-mask');
        var y = $(this).scrollTop();
        $('#results').text(y);
        x = y - 3;
        $myDiv.animate({
            height: x
        }, 30);
    }).scroll();
});











//Scroll TOP and Down CASE STUDIES PAGE
var amount = '';

function scroll() {
    $('.case-snap').animate({
        scrollTop: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}


*/



//Stciky Header
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.hdr').addClass("sticky-hdr");
  }
  else{
    $('.hdr').removeClass("sticky-hdr");
  }
});




//Classes On Body tag//
    $(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });










//SLIDER ARROW BTN - HOME PAGE
$(".dwn-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".dwn-scroll").offset().top
    }, 1500);
});


/*
//MOVING WIDE-DIV BACKGROUND IMAGES
$(document).ready(function(){
  $('.wide-box-holder').mousemove(function(e){
        var x = e.pageX - this.offsetLeft;
      if (x <= 600) {
		  x = x - 700;
       $(this).children('div.section-bg').css({'right': x }); 
//	    $('div.section-bg').css({'right': x }); 
      }
  });
});
*/




//Scroll to TOP//
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});













/*************/
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);

