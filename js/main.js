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

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});

let close_modal = document.querySelectorAll('.close_modal')
document.getElementById('swip_1').addEventListener('click', () => {
  document.getElementById('first').classList.remove('d-none')
  close_modal[0].addEventListener('click', function(){
    document.getElementById('first').classList.add('d-none')
  })
})


document.getElementById('swip_2').addEventListener('click', ()=>{
  document.getElementById('second').classList.remove('d-none')
  close_modal[1].addEventListener('click', function(){
    document.getElementById('second').classList.add('d-none')
  })
})

document.getElementById('swip_3').addEventListener('click', ()=>{
  document.getElementById('third').classList.remove('d-none')
  close_modal[2].addEventListener('click', function(){
    document.getElementById('third').classList.add('d-none')
  })
})
document.getElementById('swip_4').addEventListener('click', ()=>{
  document.getElementById('fourth').classList.remove('d-none')
  close_modal[3].addEventListener('click', function(){
    document.getElementById('fourth').classList.add('d-none')
  })
})
document.getElementById('swip_5').addEventListener('click', ()=>{
  document.getElementById('fifth').classList.remove('d-none')
  close_modal[4].addEventListener('click', function(){
    document.getElementById('fifth').classList.add('d-none')
  })
})
document.getElementById('swip_6').addEventListener('click', ()=>{
  document.getElementById('sixth').classList.remove('d-none')
  close_modal[5].addEventListener('click', function(){
    document.getElementById('sixth').classList.add('d-none')
  })
})
document.getElementById('swip_7').addEventListener('click', ()=>{
  document.getElementById('seventh').classList.remove('d-none')
  close_modal[6].addEventListener('click', function(){
    document.getElementById('seventh').classList.add('d-none')
  })
})
document.getElementById('swip_8').addEventListener('click', ()=>{
  document.getElementById('eighth').classList.remove('d-none')
  close_modal[7].addEventListener('click', function(){
    document.getElementById('eighth').classList.add('d-none')
  })
})
document.getElementById('swip_9').addEventListener('click', ()=>{
  document.getElementById('nineth').classList.remove('d-none')
  close_modal[8].addEventListener('click', function(){
    document.getElementById('nineth').classList.add('d-none')
  })
})



const menu =  document.getElementById('menu__toggle')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})

window.addEventListener('DOMContentLoaded', () => {

  // Предотвращаем прокрутку только при клике на меню
  menu.addEventListener('click', (event) => {
      // Проверяем, является ли целевой элемент меню или его потомком
      if (event.target.closest('menu_box')) {
          event.preventDefault();
      }
  });
});