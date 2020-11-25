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
  duration: 3000,
  origin: "bottom",
  distance: "300px",
});
sr.reveal(".msg-main-secondary", {
  duration: 3000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".msg-main-paragraph", {
  duration: 3000,
  origin: "center",
  distance: "300px",
});
sr.reveal("#founder-name", {
  duration: 3000,
  distance: "400px",
});
sr.reveal("#designation", {
  duration: 4000,
  distance: "300px",
});
sr.reveal("#recent-product-title", {
  duration: 3000,
});
sr.reveal(".product-card-top", {
  duration: 2500,
  origin: "top",
  distance: "300px",
});
sr.reveal(".product-card-bottom", {
  duration: 2500,
  origin: "bottom",
  distance: "300px",
});
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>',
  
  //         responsive: [                        
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
});


var imgs = $('.slider img');
imgs.each(function(){
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});