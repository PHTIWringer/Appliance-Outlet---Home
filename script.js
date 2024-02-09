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

function startSlideshow(className, duration) {
  let index = 0; // Initialize index for each slideshow

  function displayImages() {
    const images = document.getElementsByClassName(className);
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none"; // Hide all images
    }
    index++;
    if (index > images.length) {
      index = 1; // Reset index if it exceeds the number of images
    }
    images[index - 1].style.display = "block"; // Show the current image

    setTimeout(displayImages, duration); // Set the timeout for the next image
  }

  displayImages(); // Start the slideshow
}

// Initialize all slideshows with different classes and durations
startSlideshow("image-fade", 10000); // 10 seconds
startSlideshow("image-fade-loveseat", 13000); // 13 seconds
startSlideshow("image-fade-recliner", 15000); // 15 seconds
startSlideshow("image-fade-rugs", 17000); // 17 seconds
startSlideshow("image-fade-appliance", 19000); // 19 seconds

/* Scroll to Top */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
