var navbar = $("#navbar");
var background = $('.background');
console.log($(window).scrollTop);
$(window).scroll(function(e) {
    console.log(background.scrolltop);
    
  
});
$(function(){
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 322) {
            navbar.addClass("scroll-navbar");
          } else {
            navbar.removeClass("scroll-navbar");
          }
        
    //   var aTop = $('.ad').height();
    //   if($(this).scrollTop()>=aTop){
    //       alert('header just passed.');
          // instead of alert you can use to show your ad
          // something like $('#footAd').slideup();
     
    });
  });




//   Submit Button

var basicTimeline = anime.timeline({
    autoplay: false
  });
  
  var pathEls = $(".check");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
  }
  
  basicTimeline
    .add({
      targets: ".text",
      duration: 1,
      opacity: "0"
    })
    .add({
      targets: ".button",
      duration: 1300,
      height: 10,
      width: 300,
      backgroundColor: "#e3e4e9",
      border: "0",
      borderRadius: 100
    })
    .add({
      targets: ".progress-bar",
      duration: 2000,
      width: 300,
      easing: "linear"
    })
    .add({
      targets: ".button",
      width: 0,
      duration: 1
    })
    .add({
      targets: ".progress-bar",
      width: 80,
      height: 80,
      delay: 500,
      duration: 750,
      borderRadius: 80,
      backgroundColor: "#71DFBE"
    })
    .add({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: 200,
      easing: "easeInOutSine"
    });
  
  $(".button").click(function() {
    basicTimeline.play();
  });
  
  $(".text").click(function() {
    basicTimeline.play();
  });