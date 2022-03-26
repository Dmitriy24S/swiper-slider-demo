const data = [
  { userImg: "./images/img1.jpg" },
  { userImg: "./images/img2.jpg" },
  { userImg: "./images/img3.jpg" },
  { userImg: "./images/img4.jpg" },
  { userImg: "./images/img5.jpg" },
  { userImg: "./images/img6.jpg" },
  { userImg: "./images/img7.jpg" },
  { userImg: "./images/img8.jpg" },
  { userImg: "./images/img9.jpg" },
];

const cardTemplate = document.querySelector("[data-card-template");
const cardContainer = document.querySelector(".swiper-wrapper");

// load and show cards
// take profile img from data, use html template for cards
data.forEach((element) => {
  console.log("tsts");
  const card = cardTemplate.content.cloneNode(true).children[0];
  const imgLink = card.querySelector(".card__img");
  imgLink.src = element.userImg;
  cardContainer.append(card);
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      width: 320,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      width: 640,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 768px
    1078: {
      width: 950,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
