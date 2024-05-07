
// Dark mood
 var icon = document.getElementById("icon");
 icon.onclick = function () {
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
     icon.src = "./assets/sun.png";
   } else {
     icon.src = "./assets/moon.png";
   }
 };
 // Typing Animation
 //for Name
//  var typed = new Typed("#naam", {
//    strings: [
//      "Sajan Kumar Singh ",
//    ],
//    typeSpeed: 50,
//    backSpeed: 50,
//    backDelay: 100,
//    loop: true,
//  });


 //For Web Dev
 var typed = new Typed("#text", {
   strings: [
     "Web Developer ",
     "MERN Stack Developer",
     "Photo &amp; Video Editor",
     "Front-End Developer.",
   ],
   typeSpeed: 50,
   backSpeed: 50,
   backDelay: 100,
   loop: true,
 });
 

 function submitForm() {
  var searchTerm = document.getElementById('searchInput').value;
  if (searchTerm.trim() !== '') {
      var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
      window.location.href = searchUrl;
  }
  return false; // Prevent form submission
}