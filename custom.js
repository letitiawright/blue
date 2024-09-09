
(function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg' },
              { src: 'images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg' },
              { src: 'images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });



    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  function startCountdown(element) {
    var countDownDate = new Date(element.dataset.endtime).getTime();
    var countdownBlocks = {
      days: element.querySelector('.days'),
      hours: element.querySelector('.hours'),
      minutes: element.querySelector('.minutes'),
      seconds: element.querySelector('.seconds')
    };
  
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownBlocks.days.innerHTML = days;
      countdownBlocks.hours.innerHTML = hours;
      countdownBlocks.minutes.innerHTML = minutes;
      countdownBlocks.seconds.innerHTML = seconds;
  
      if (distance < 0) {
        clearInterval(x);
        countdownBlocks.days.innerHTML = "0";
        countdownBlocks.hours.innerHTML = "0";
        countdownBlocks.minutes.innerHTML = "0";
        countdownBlocks.seconds.innerHTML = "0";
      }
    }, 1000);
  }
  
  document.querySelectorAll('.countdown').forEach(startCountdown);


