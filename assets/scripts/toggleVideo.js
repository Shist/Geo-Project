document.querySelector(".main__video-wrapper").onclick = () => {
  const startBtn = document.querySelector(".main__video-click-btn");
  const videoDemo = document.querySelector(".main__video");
  if (videoDemo.paused) {
    startBtn.classList.add("hidden-element");
    videoDemo.play();
  } else {
    videoDemo.pause();
    startBtn.classList.remove("hidden-element");
  }
};
