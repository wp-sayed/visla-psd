(function($){
	$(document).ready(function(){

		

           $('.slider-active').owlCarousel({

           		items:1,
           		loop:true,
           		dots: true,
           		autoplay:true,
           		autoplaySpeed:500,
           		smartSpeed:1000,
           		autoplayHoverPause:true,
              responsive:{
                0:{
                  items:1
                },
                600:{
                  items:1
                },
                1000:{
                  items:1
                }
              }

           });

           


          let isoo = $('.portfolio-active').isotope({
             itemSelector: '.p-items',
             layoutMode:'fitRows'

          });
          $('.project-menu button').click(function(){
              let search_val = $(this).attr('data-filter');

                    isoo.isotope({
                    filter: search_val
               });
          });
          



          $('.res-menu').click(function(){
              $('ul').slideToggle(400);
          });







		



	});
})(jQuery)