"use strict";

// 스크롤에 따라 navbar 변화

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
//사이즈 보는 함수9눈에 보여지는 Element size. 크기 옵션이 전부 적용된 size. offsetwidth랑 비교

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 네브바 메뉴 누를 시 스크롤 자동 이동(화면 이동)

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoViews(link);
});

// CONTACT ME 누를 시 이동
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", (e) => {
  scrollIntoViews("#contact");
});

//스크롤을 내릴수록 화면 점점 투명하게 만들기

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow up 보이게 하기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// arrow up button 클릭

arrowUp.addEventListener("click", () => {
  scrollIntoViews("#home");
});

//중복 기능 유틸리티 함수로 설정
function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
