var icon = document.getElementById("icon");
icon.onclick = function() {
document.body.classList.toggle("dark-theme");
if (document.body.classList.contains("dark-theme")) {
  icon.src = "./assets/sun.png";
} else {
  icon.src = "./assets/moon.png";
}
};



var typed = new Typed('#text', {
  strings: ['Web Developer ',' Photo &amp; Video Editor', 'Front-End Developer.'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:100,
  loop:true
});

