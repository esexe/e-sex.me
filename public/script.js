 document.addEventListener('DOMContentLoaded', function() {
   const music = document.getElementById('backgroundMusic');
   const video = document.getElementById('backgroundVideo');
   const toggleButton = document.getElementById('swipeButton');
   const linkButtons = document.getElementById('linkButtons');
   const newLinks = document.getElementById('newLinks');
   const shareButton = document.getElementById('shareButton');
   const shareMenu = document.getElementById('shareMenu');

   video.load();
   video.addEventListener('canplaythrough', function() {
     music.play();
   }, { once: true });

   swipeButton.addEventListener('click', function() {
       if (linkButtons.style.display !== 'none') {
           linkButtons.style.transition = 'all 0.5s ease';
           linkButtons.style.opacity = '0';
           setTimeout(() => {
               linkButtons.style.display = 'none';
               newLinks.style.display = 'flex';
               newLinks.style.opacity = '0';
               setTimeout(() => {
                   newLinks.style.transition = 'all 0.5s ease';
                   newLinks.style.opacity = '1';
               }, 10);
           }, 500);
       } else {
           newLinks.style.transition = 'all 0.5s ease';
           newLinks.style.opacity = '0';
           setTimeout(() => {
               newLinks.style.display = 'none';
               linkButtons.style.display = 'flex';
               linkButtons.style.opacity = '0';
               setTimeout(() => {
                   linkButtons.style.transition = 'all 0.5s ease';
                   linkButtons.style.opacity = '1';
               }, 10);
           }, 500);
       }
    });
      shareButton.addEventListener('click', () => {
      shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
      });
      document.getElementById('shareTwitter').addEventListener('click', () => {
      window.open(`https://twitter.com/share?url=${window.location.href}`, '_blank');
      });
      document.getElementById('shareFacebook').addEventListener('click', () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
      });
      document.getElementById('shareInstagram').addEventListener('click', () => {
      alert('Please copy the link and share it on Instagram.');
      });
      document.getElementById('shareDiscord').addEventListener('click', () => {
      window.open(`https://discordapp.com/channels/@me?url=${window.location.href}`, '_blank');
      });
      document.getElementById('copyLink').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'));
      });
    });



