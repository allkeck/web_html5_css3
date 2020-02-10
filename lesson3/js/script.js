window.onload = function() {
  let playButton = document.getElementsByClassName("video__play-icon")[0],
      videoWrap = document.getElementsByClassName("video__wrap"),
      videoItem = document.getElementsByClassName("video__item")[0],
      videoSection = document.getElementsByClassName("video")[0];

  playButton.addEventListener("click", () => {
    for(let i = 0; i < videoWrap.length; i++) {
      videoWrap[i].style.opacity = "0"
    }
    videoSection.style.background = "none";
    videoItem.play()
  });

  let galleryButton = document.getElementsByClassName("projects__gallery-menu-item"),
      galleryItem = document.getElementsByClassName("projects__gallery-item");

  for(let i = 0; i < galleryButton.length; i++) {
    galleryButton[i].addEventListener("click", function() {
      document.querySelector(".projects__gallery-menu-item.active").classList.remove("active");
      this.classList.add("active");
      for(let j = 0; j < galleryItem.length; j++) {
        if (galleryItem[j].dataset.galleryType === this.getAttribute("id")
            || this.getAttribute("id") === "all") {
          galleryItem[j].style.display = "block";
        } else {
          galleryItem[j].style.display = "none";
        }
      }
    });
  }
}