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

//Display and hide images on click in ABOUT section

function showRun() {}

function showHideGrad() {
  const gradImg = document.getElementById('grad-img');
  if (gradImg.style.display === 'none') {
    gradImg.style.display = 'block';
  } else {
    gradImg.style.display = 'none';
  }
}

function showHideLocation() {
  const location = document.getElementById('location-img');
  if (location.style.display === 'none') {
    location.style.display = 'block';
  } else {
    location.style.display = 'none';
  }
}

function showHideRun() {
  const friends = document.getElementById('friends-fam-img');
  const nature = document.getElementById('nature-img');
  const run = document.getElementById('running-img');
  const read = document.getElementById('reading-img');
  if (run.style.display === 'none') {
    run.style.display = 'block';
    read.style.display = 'none';
    nature.style.display = 'none';
    friends.style.display = 'none';
  } else {
    run.style.display = 'none';
  }
}

function showHideRead() {
  const friends = document.getElementById('friends-fam-img');
  const nature = document.getElementById('nature-img');
  const run = document.getElementById('running-img');
  const read = document.getElementById('reading-img');
  if (read.style.display === 'none') {
    read.style.display = 'block';
    run.style.display = 'none';
    nature.style.display = 'none';
    friends.style.display = 'none';
  } else {
    read.style.display = 'none';
  }
}

function showHideNature() {
  const friends = document.getElementById('friends-fam-img');
  const nature = document.getElementById('nature-img');
  const run = document.getElementById('running-img');
  const read = document.getElementById('reading-img');
  if (nature.style.display === 'none') {
    nature.style.display = 'block';
    read.style.display = 'none';
    run.style.display = 'none';
    friends.style.display = 'none';
  } else {
    nature.style.display = 'none';
  }
}

function showHideFriends() {
  const friends = document.getElementById('friends-fam-img');
  const nature = document.getElementById('nature-img');
  const run = document.getElementById('running-img');
  const read = document.getElementById('reading-img');
  if (friends.style.display === 'none') {
    friends.style.display = 'block';
    read.style.display = 'none';
    run.style.display = 'none';
    nature.style.display = 'none';
  } else {
    friends.style.display = 'none';
  }
}

// Open Admin modal
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// GET POST - Send data to G-Sheets and alert when form is submitted
window.addEventListener('load', function () {
  const form = document.getElementById('my-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      // alert("You're now on the list!");
    });
  });
});

//Open success modal after submit
const open_success = document.getElementById('open-success');
const modal_container_success = document.getElementById('modal-container-success');
const close_success = document.getElementById('close-success');
const name_input = document.getElementById('name');
const mail_input = document.getElementById('email');

open_success.addEventListener('click', () => {
  modal_container_success.classList.add('show-success');
});

close_success.addEventListener('click', () => {
  modal_container_success.classList.remove('show-success');
  name_input.value = '';
  mail_input.value = '';
});

//Open & close blog articles
const open_art1 = document.getElementById('open-art1');
const art1_container = document.getElementById('art1-container');
const close_art1 = document.getElementById('close-art1');

open_art1.addEventListener('click', () => {
  art1_container.classList.add('show-art1');
});

close_art1.addEventListener('click', () => {
  art1_container.classList.remove('show-art1');
});

const open_art2 = document.getElementById('open-art2');
const art2_container = document.getElementById('art2-container');
const close_art2 = document.getElementById('close-art2');

open_art2.addEventListener('click', () => {
  art2_container.classList.add('show-art2');
});

close_art2.addEventListener('click', () => {
  art2_container.classList.remove('show-art2');
});
