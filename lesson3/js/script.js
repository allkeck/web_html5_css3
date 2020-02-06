let playButton = document.getElementsByClassName("video__play-icon")[0],
    videoWrap = document.getElementsByClassName("video__wrap"),
    videoItem = document.getElementsByClassName("video__item")[0],
    videoSection = document.getElementsByClassName("video")[0];

playButton.addEventListener("click" , () => {
  for(let i = 0; i < videoWrap.length; i++) {
    videoWrap[i].style.opacity = "0"
  }
  videoSection.style.background = "none";
  videoItem.play()
});