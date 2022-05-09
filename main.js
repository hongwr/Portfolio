"use strict";

// 스크롤에 따라 navbar 변화

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
//사이즈 보는 함수9눈에 보여지는 Element size. 크기 옵션이 전부 적용된 size. offsetwidth랑 비교

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  console.log(e.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
