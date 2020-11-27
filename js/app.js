// scrool reveal
window.sr = ScrollReveal();
sr.reveal("#about-img", {
  duration: 2000,
  origin: "left",
  distance: "300px",
});
sr.reveal(".about-msg", {
  duration: 2000,
  origin: "right",
  distance: "300px",
});
sr.reveal(".msg-main", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});
sr.reveal(".msg-main-secondary", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".msg-main-paragraph", {
  duration: 2000,
  origin: "center",
  distance: "300px",
});
sr.reveal("#founder-name", {
  duration: 2000,
  distance: "400px",
});
sr.reveal("#designation", {
  duration: 2000,
  distance: "300px",
});
sr.reveal("#recent-product-title", {
  origin: "top",
  duration: 2000,
  distance: "300px",
});
sr.reveal(".product-card-top", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".product-card-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "300px",
});
$('.testi2').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    1170: {
      items: 1
    }
  }
});

$(function() {
    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    $('.testi2 .owl-dot').each(function() {
        $(this).addClass('dotnumber' + dotcount);
        $(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });
    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;
    $('.testi2 .owl-item').not('.cloned').each(function() {
        $(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });
    $('.testi2 .owl-dot').each(function() {
        grab = jQuery(this).data('info');
        slidegrab = $('.slidenumber' + grab + ' img').attr('src');
        console.log(slidegrab);
        $(this).css("background-image", "url(" + slidegrab + ")");
    });
    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 

});