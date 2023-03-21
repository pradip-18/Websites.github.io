const audio = document.querySelector('audio');
const songLinks = document.querySelectorAll('#songs a');

songLinks.forEach(songLink => {
  songLink.addEventListener('click', event => {
    event.preventDefault();
    audio.src = songLink.href;
    audio.play();
  });
});

audio.addEventListener('ended', event => {
  const nextSong = songLinks[Math.floor(Math.random() * songLinks.length)];
  audio.src = nextSong.href;
  audio.play();
});
