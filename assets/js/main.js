(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // Timmer
  function Timmer() {
    
     // Set the date we're counting down to
     var countDownDate = new Date("Dec 31, 2021 15:37:25").getTime();

     // Update the count down every 1 second
     var x = setInterval(function() {

     // Get todays date and time
     var now = new Date().getTime();

     // Find the distance between now and the count down date
     var distance = countDownDate - now;

     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     document.querySelector(".days").innerHTML = days;
     document.querySelector(".hours").innerHTML = hours;
     document.querySelector(".minutes").innerHTML = minutes;
     document.querySelector(".seconds").innerHTML = seconds;

     // If the count down is finished, write some text 
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("timmers").innerHTML = "EXPIRED";
     }
     }, 1000); 
  }
  Timmer()
    
  // ScrollTop
  function ScrollToTop() {
    let btn = document.querySelector('.scrollToTop')
    window.addEventListener('scroll', () => { 
        if (window.scrollY > 500) {
            btn.classList.add('show')
        }else{ 
            btn.classList.remove('show')
        }
    })
  }
  ScrollToTop()
 
})(jQuery);
