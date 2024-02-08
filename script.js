/* button scrolling*/

document.querySelectorAll(".nav-link-btns button").forEach((button) => {
  button.addEventListener("click", function () {
    const section = document.querySelector(this.getAttribute("data-href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* IMG slideshows */

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
  setTimeout(displayImages, 10000);
}

let index1 = 0;
displayImages1();
function displayImages1() {
  let i;
  const images1 = document.getElementsByClassName("image-fade-loveseat");
  for (i = 0; i < images1.length; i++) {
    images1[i].style.display = "none";
  }
  index1++;
  if (index1 > images1.length) {
    index1 = 1;
  }
  images1[index1 - 1].style.display = "block";
  setTimeout(displayImages1, 13000);
}

let index2 = 0;
displayImages2();
function displayImages2() {
  let i;
  const images2 = document.getElementsByClassName("image-fade-recliner");
  for (i = 0; i < images2.length; i++) {
    images2[i].style.display = "none";
  }
  index2++;
  if (index2 > images2.length) {
    index2 = 1;
  }
  images2[index2 - 1].style.display = "block";
  setTimeout(displayImages2, 15000);
}

let index3 = 0;
displayImages3();
function displayImages3() {
  let i;
  const images3 = document.getElementsByClassName("image-fade-rugs");
  for (i = 0; i < images3.length; i++) {
    images3[i].style.display = "none";
  }
  index3++;
  if (index3 > images3.length) {
    index3 = 1;
  }
  images3[index3 - 1].style.display = "block";
  setTimeout(displayImages3, 17000);
}
