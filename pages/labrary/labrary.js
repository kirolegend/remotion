new Accordion('.accordion-container');

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});



// const swiper = new Swiper('.swiper', {

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// Modal
// let firstModal = document.getElementById('fisrtModal')
// let secondModal = document.getElementById('secondModal')


// let first = document.getElementById('first')
// let second = document.getElementById('second')
// let third = document.getElementById('third')
// let fourth = document.getElementById('fourth')
// let fifth = document.getElementById('fifth')
// let sixth = document.getElementById('sixth')

// let close = document.querySelectorAll('.close_modal')

// function firstFunc (){
//   firstModal.classList.add('open')
//   close[0].addEventListener('click', function (){
//     firstModal.classList.remove('open')
//   })
//   document.querySelector('#firstModal, .modal_container').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   document.querySelector('.modal_container').addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// // first.addEventListener('click', firstFunc)
// console.log(first);




// function secondFunc(){
//   secondModal.classList.add('open')
//   close[1].addEventListener('click', function (){
//     secondModal.classList.remove('open')
//   })
//   document.querySelector('.modal_container, #secondModal').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   secondModal.addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// second.addEventListener('click', secondFunc)
// console.log(secondFunc);



// function thirdFunc (){
//   thirdModal.classList.add('open')
//   close[0].addEventListener('click', function (){
//     thirdModal.classList.remove('open')
//   })
//   document.querySelector('.modal_container, #thirdModal').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   thirdModal.addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// third.addEventListener('click', thirdFunc)

// function fourthFunc (){
//   fourthModal.classList.add('open')
//   close[0].addEventListener('click', function (){
//     fourthModal.classList.remove('open')
//   })
//   document.querySelector('.modal_container, #fourthModal').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   fourthModal.addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// fourth.addEventListener('click', fourthFunc)

// function fifthFunc (){
//   fifthModal.classList.add('open')
//   close[0].addEventListener('click', function (){
//     fifthModal.classList.remove('open')
//   })
//   document.querySelector('.modal_container, #fifthModal').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   fifthModal.addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// fifth.addEventListener('click', fifthFunc)

// function sixthFunc (){
//   sixthModal.classList.add('open')
//   close[0].addEventListener('click', function (){
//     sixthModal.classList.remove('open')
//   })
//   document.querySelector('.modal_container, #sixthModal').addEventListener('click', event => {
//     event._isClickWithInModal = true;
//   })
//   sixthModal.addEventListener('click', event =>{
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
//   })
// }
// sixth.addEventListener('click', sixthFunc)







const container = document.getElementById('container')
let photo = document.getElementById('photo')
let benefits = document.getElementById('benefits')

function photoFunc (){
  photo.classList.add('active')
  benefits.classList.remove('active')
  container.innerHTML = `
  <h1 class="title">
      <img class="icon_title" src="../../img/icons/icon_title.svg" alt="">
      Фотогалерея
    </h1>
  <div class="cards">
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
      <div class="card_item">
        <img src="../../img/just_img/card_img.png" alt="">
        <div class="card_text">
          <h5>Название</h5>
          <p class="rub">Рубрика</p>
          <p class="text_">Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
        </div>
      </div>
    </div>
  `
}
photo.onclick = photoFunc

function benefitsFunc(){
  photo.classList.remove('active')
  benefits.classList.add('active')
  container.innerHTML = `
  <h1 class="title">
      <img class="icon_title" src="../../img/icons/icon_title.svg" alt="">
      Учебные пособия
    </h1>
    <div class="mat_container">
      <button class="doc_btn">
        <img src="../../img/icons/doc.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
      <button class="doc_btn">
        <img src="../../img/icons/doc.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
      <button class="doc_btn">
        <img src="../../img/icons/doc.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
      <button class="doc_btn">
        <img src="../../img/icons/posob.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
      <button class="doc_btn">
        <img src="../../img/icons/posob.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
      <button class="doc_btn">
        <img src="../../img/icons/posob.svg" alt="">
        дополнительная книга 1-2 <br> для второго уровня
      </button>
    </div>
  `
}
benefits.onclick = benefitsFunc

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramValue = urlParams.get('tab');

if(paramValue == 16){
  photoFunc()
}
if(paramValue == 17){
  benefitsFunc()
}