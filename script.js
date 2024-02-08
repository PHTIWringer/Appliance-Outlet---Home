let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image-fade");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 5000);
}

displayImages1();
function displayImages1() {
  let i;
  const images1 = document.getElementsByClassName("image-fade-loveseat");
  for (i = 0; i < images1.length; i++) {
    images1[i].style.display = "none";
  }
  index++;
  if (index > images1.length) {
    index = 1;
  }
  images1[index - 1].style.display = "block";
  setTimeout(displayImages1, 5000);
}

displayImages2();
function displayImages2() {
  let i;
  const images2 = document.getElementsByClassName("image-fade-rugs");
  for (i = 0; i < images2.length; i++) {
    images2[i].style.display = "none";
  }
  index++;
  if (index > images2.length) {
    index = 1;
  }
  images2[index - 1].style.display = "block";
  setTimeout(displayImages2, 5000);
}
