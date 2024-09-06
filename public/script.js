     document.addEventListener('DOMContentLoaded', function() {
       const music = document.getElementById('backgroundMusic');
       document.body.addEventListener('click', function() {
         music.play();
       }, { once: true });
     });