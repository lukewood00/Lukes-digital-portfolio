document.getElementsByTagName('button')[0].onclick = function () {
  $('html, body').animate({
      scrollTop: $("#aboutme").offset().top
  }, 200);
