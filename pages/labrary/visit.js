new Accordion('.accordion-container');

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});



const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Modal
let firstModal = document.getElementById('fisrtModal')
let secondModal = document.getElementById('secondModal')
let thirdModal = document.getElementById('thirdModal')
let fourthModal = document.getElementById('fourthModal')
let fifthModal = document.getElementById('fifthModal')
let sixthModal = document.getElementById('sixthModal')

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let fourth = document.getElementById('fourth')
let fifth = document.getElementById('fifth')
let sixth = document.getElementById('sixth')

let close_modal = document.querySelectorAll('.close_modal')

first.addEventListener('click', () => {
  firstModal.classList.remove('none_modal')
  close_modal[0].addEventListener('click', function(){
    firstModal.classList.add('none_modal')
  })
})
second.addEventListener('click', () => {
  secondModal.classList.remove('none_modal')
  close_modal[1].addEventListener('click', function(){
    secondModal.classList.add('none_modal')
  })
})
third.addEventListener('click', () => {
  thirdModal.classList.remove('none_modal')
  close_modal[2].addEventListener('click', function(){
    thirdModal.classList.add('none_modal')
  })
})
fourth.addEventListener('click', () => {
  fourthModal.classList.remove('none_modal')
  close_modal[3].addEventListener('click', function(){
    fourthModal.classList.add('none_modal')
  })
})
fifth.addEventListener('click', () => {
  fifthModal.classList.remove('none_modal')
  close_modal[4].addEventListener('click', function(){
    fifthModal.classList.add('none_modal')
  })
})
sixth.addEventListener('click', () => {
  sixthModal.classList.remove('none_modal')
  close_modal[5].addEventListener('click', function(){
    sixthModal.classList.add('none_modal')
  })
})
