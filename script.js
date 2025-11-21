const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav__links");

        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });

//Show More button
function showMore(button) {
          const hiddenText = button.previousElementSibling;
          if (
            hiddenText.style.display === "none" ||
            hiddenText.style.display === ""
          ) {
            hiddenText.style.display = "inline";
            button.textContent = "Read less";
          } else {
            hiddenText.style.display = "none";
            button.textContent = "Read more";
          }
        }

// Swiper for each destination
new Swiper(".swiper-paris", {
  loop: true,
  navigation: {
    nextEl: ".swiper-paris .swiper-button-next",
    prevEl: ".swiper-paris .swiper-button-prev"
  },
  pagination: {
    el: ".swiper-paris .swiper-pagination",
    clickable: true
  }
});

new Swiper(".swiper-maldives", {
  loop: true,
  navigation: {
    nextEl: ".swiper-maldives .swiper-button-next",
    prevEl: ".swiper-maldives .swiper-button-prev"
  },
  pagination: {
    el: ".swiper-maldives .swiper-pagination",
    clickable: true
  }
});

new Swiper(".swiper-goa", {
  loop: true,
  navigation: {
    nextEl: ".swiper-goa .swiper-button-next",
    prevEl: ".swiper-goa .swiper-button-prev"
  },
  pagination: {
    el: ".swiper-goa .swiper-pagination",
    clickable: true
  }
}); 

new Swiper(".swiper-banff", {
  loop: true,
  navigation: {
    nextEl: ".swiper-banff .swiper-button-next",
    prevEl: ".swiper-banff .swiper-button-prev"
  },
  pagination: {
    el: ".swiper-banff .swiper-pagination",
    clickable: true
  }
});   

new Swiper(".swiper-istanbul", {
  loop: true,
  navigation: {
    nextEl: ".swiper-istanbul .swiper-button-next",
    prevEl: ".swiper-istanbul .swiper-button-prev"
  },
  pagination: {
    el: ".swiper-istanbul .swiper-pagination",
    clickable: true
  }
});        