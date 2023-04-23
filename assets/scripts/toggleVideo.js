function clickOnVideo() {
  const startBtn = document.getElementById("video-start-btn");
  const videoDemo = document.getElementById("video-demo");
  if (videoDemo.paused) {
    startBtn.style.display = "none";
    videoDemo.play();
  } else {
    videoDemo.pause();
    startBtn.style.display = "inline-block";
  }
}
