var navbar = $("#navbar");
var background = $('.background');
console.log('$(window).scrollTop');
console.log($(window).scrollTop);
$(function () {
  let scrollPosition = ($(this).scrollTop());
  window.scrollTo(0, scrollPosition+1);

  $(window).scroll(function () {
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

// $(".diamond-item").hover(function () {
//   let project = ($(this).data('project'));
//   populateItem(project)
//   $(".big-item").show();
// }, function () {
//   return 0;
// });
function populateItem(project) {
  let currentProject;
  projects.forEach(element => {
    if (element.title == project) {
      currentProject = element;
    }
  });
  $(".big-item").html(`<div class="container">
  <h3>
      ${currentProject.title}
      </h3>
      <span>
      <a href="${currentProject.deployedLink}">See the app in action!</a>
  </span>
  |
  <span>
      <a href="${currentProject.githubLink}">See the code on GitHub!</a>
  </span>
</div>
`);

}

$(".big-item").hover(function () {
  $(".big-item").show();
}, function () {
  $(".big-item").empty();
  $(".big-item").hide();

})

let Project = function (title, deployedLink, githubLink, background) {
  this.title = title,
    this.deployedLink = deployedLink,
    this.githubLink = githubLink,
    this.background = background
}
let hangman = new Project("Jungle Hangman", "https://watkins656.github.io/Word-Guess-Game/", "https://github.com/watkins656/Word-Guess-Game", "")
let trivia = new Project("Bar Trivia", "https://watkins656.github.io/TriviaGame/", "https://github.com/watkins656/TriviaGame", "")
let starFox = new Project("Star Fox RPG", "https://watkins656.github.io/Star-Fox-RPG/", "https://github.com/watkins656/Star-Fox-RPG", "../../assets/images/Project-Screenshots/star-fox-backgrounds-20.jpg")
let nationalParks = new Project("National Parks Travel Guide", "https://watkins656.github.io/group-project-1/", "https://github.com/watkins656/group-project-1", "")
let trainSchedule = new Project("Train Scheduler", "https://watkins656.github.io/07-Train-Schedule/", "https://github.com/watkins656/07-Train-Schedule", "")
let projects = [hangman, trivia, starFox, nationalParks, trainSchedule];

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

$(".button").click(function () {
  basicTimeline.play();
  $('#form-inputs').hide();

});

$(".text").click(function () {
  basicTimeline.play();
});

$('#contact-form').hide();
$("#contact-me-button").click(function () {
  $('#contact-me-button').hide();
  $('#contact-form').show();


});

