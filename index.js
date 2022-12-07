'use strict';

//Fixed navbar
const navHeight = document.querySelector('.navbar').offsetHeight;
// console.log(navHeight);
document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + 'px');

//Convert main nav to hamburger menu for smaller screens
const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
});

//Flip cards
const flipRun = document.querySelector('.flip-card-container-run');
flipRun.addEventListener('click', function () {
  flipRun.classList.toggle('flip');
});
const flipRead = document.querySelector('.flip-card-container-read');
flipRead.addEventListener('click', function () {
  flipRead.classList.toggle('flip');
});
const flipNature = document.querySelector('.flip-card-container-nature');
flipNature.addEventListener('click', function () {
  flipNature.classList.toggle('flip');
});
const flipFriends = document.querySelector('.flip-card-container-friends');
flipFriends.addEventListener('click', function () {
  flipFriends.classList.toggle('flip');
});
