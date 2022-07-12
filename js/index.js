$(document).ready(function(){
  var nav = $('#navi');
  var menu = $('.menu');


  function navClick(){
    $(menu).slideToggle(1000,'easeOutQuint');
    $('.m-icon').toggleClass('clicked-btn');
  }

  var evtResize = false;
  // mobile - respon slide nav
  $(window).on('load resize',function(){
    var screenSize = $(window).width();

    if(screenSize >= 623 && evtResize == true){
      $(nav).unbind();
      $(menu).show();
      $('.m-icon').removeClass('clicked-btn');
      evtResize = false;
    }else if(screenSize < 623 && evtResize == false){
      $(nav).unbind().on('click', navClick);
      $(menu).hide();
      evtResize = true;
    }
  }).scroll(function(){
    var sTop = $(window).scrollTop();
    var srllh =  $('section').height()-50;

    if(sTop <= srllh){
      $(nav).removeClass('nav-scroll');
    }
    if(sTop >= srllh){
      $('.m-icon').removeAttr('style');
      $(nav).addClass('nav-scroll');
    }
  });
  // mobile - respon slide nav - end


 $(menu).find('a').on('click', function(event){
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, 'easeInOutQuad', function(){
        window.location.hash = hash;
      });
    }
  });
// navigtion - end

  // intro - next button scroll - start
  $('.next').on('click', function(event){
     if(this.hash !== ""){
       event.preventDefault();
       var hash = this.hash;

       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 600, 'easeInOutQuad', function(){
         window.location.hash = hash;
       });
     }
   });
   // intro - next button scroll - end
   // link scroll event - end

  // Scrolling down changes background image - start
  $(window).scroll(function(){
   if($(this).scrollTop() > $('#intro').height()){
     $('.wrap').css({
       "background-image": "url('https://source.unsplash.com/QRghuf5yTA4/1600x900')",
       "background-position":"center",
       "background-repeat":"no-repeat",
       "background-attachment": "fixed",
       "background-size":"cover"
     });
   }
   if($(this).scrollTop() < $('#intro').height()) {
     $('.wrap').css('background','');
   }
  });
  // Scrolling down changes background image - end

}); // $document - end
