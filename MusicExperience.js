let audio;
let progress;

document.querySelector(".btn").addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    return;
  }

  audio = new Audio("Time Is Running Out_ MUSE.mp3");
  audio.loop = false;
  audio.volume = 0.5;
  audio.play();

  progress = setInterval(updateProgress, 100);
});
function updateProgress() {
  if (audio && audio.duration) {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
}