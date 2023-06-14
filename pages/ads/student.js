const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const open = document.getElementById('open')
const modal =document.getElementById('modal')
const close = document.getElementById('close')
open.addEventListener('click', ()=>{
  modal.classList.remove('d-none')
    close.addEventListener('click', ()=>{
      modal.classList.add('d-none')
    })
})

