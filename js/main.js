new Accordion('.accordion-container');



const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const swiper_2 = new Swiper('.swiper_2', {
//   // Optional parameters
//   // direction: 'vertical',
//   // loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


document.getElementById('swip_1').addEventListener('click', () => {
  document.getElementById('first').classList.remove('d-none')
})
document.getElementById('swip_2').addEventListener('click', ()=>{
  alert('swip_2')
})
document.getElementById('swip_3').addEventListener('click', ()=>{
  alert('swip_3')
})
document.getElementById('swip_4').addEventListener('click', ()=>{
  alert('swip_4')
})
document.getElementById('swip_5').addEventListener('click', ()=>{
  alert('swip_5')
})
document.getElementById('swip_6').addEventListener('click', ()=>{
  alert('swip_6')
})
document.getElementById('swip_7').addEventListener('click', ()=>{
  alert('swip_7')
})
document.getElementById('swip_8').addEventListener('click', ()=>{
  alert('swip_8')
})
document.getElementById('swip_9').addEventListener('click', ()=>{
  alert('swip_9')
})


var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});



// let slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n){
//   showSlides(slideIndex += n)
// }
// function currentSlide(n){
//   showSlides(slideIndex = n)
// }

// function showSlides(n){
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('dot')

//   if(n > slides.length){
//     slideIndex = 1
//   }
//   if(n < 1){
//     slideIndex = slides.length
//   }
// }
const menu =  document.getElementById('label_menu')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})