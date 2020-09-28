

// scrollspy
$(".scr").scrollWatchMapTo(".nav-item");

// wow js



      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       100,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )


                    wow.init(1500);         

// portfolio




		$(document).ready(function(){
		                 $('.list').click(function(){
		                     var ashik = $(this).attr('data-filter');  
		                 if ( ashik == 'all'){
		                     $('.itemBox').show('2000');
		                 }
		                     
		                                   
                             
                             
                             
		                    
		                 else{
		                     $('.itemBox').not('.' +ashik).hide('10000');
		                     $('.itemBox').filter('.' +ashik).show('10000');
		                 }
		                     
		              })
		         })