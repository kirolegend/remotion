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
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// MODAL
const open = document.getElementById('open')
const modal =document.getElementById('modal')
const close = document.getElementById('close')
open.addEventListener('click', ()=>{
  modal.classList.remove('d-none')
    close.addEventListener('click', ()=>{
      modal.classList.add('d-none')
    })
})


const general_ads = document.getElementById('general_ads')
const courses_ads = document.getElementById('courses_ads')
const gks_ads = document.getElementById('gks_ads')
const topik_ads = document.getElementById('topik_ads')
const events_ads = document.getElementById('events_ads')
const miscellaneous_ads = document.getElementById('miscellaneous_ads')
const vacation_ads = document.getElementById('vacation_ads')

const container = document.getElementById('container')

general_ads.addEventListener('click', generalAds)
function generalAds(){
  general_ads.classList.add('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <div class="cards">
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <img class="card_img" src="../../img/just_img/news_img.png" alt="">
    <div class="card_item-text">
      <h3>Заголовок</h3>
      <p>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.</p>
      <div>Рубрика</div>
      <div>20 января 2023</div>
    </div>
    <a href="#">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div></div>
          <div class="pagination_block">
            <span class="pagination">
              <a href="#">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_52_2535)">
                <path d="M8.30949 8.12084L5.18848 4.99983L8.30949 1.87881" stroke="#A6A6A6" stroke-width="1.24841" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.18742 8.12084L2.06641 4.99983L5.18742 1.87881" stroke="#A6A6A6" stroke-width="1.24841" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_52_2535">
                <rect width="9.98726" height="9.98726" fill="white" transform="translate(0.506836 0.0063715)"/>
                </clipPath>
                </defs>
                </svg>
              </a>
              <a  class="active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a class="arrow_right" href="#">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_52_2535)">
                  <path d="M8.30949 8.12084L5.18848 4.99983L8.30949 1.87881" stroke="#A6A6A6" stroke-width="1.24841" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.18742 8.12084L2.06641 4.99983L5.18742 1.87881" stroke="#A6A6A6" stroke-width="1.24841" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_52_2535">
                  <rect width="9.98726" height="9.98726" fill="white" transform="translate(0.506836 0.0063715)"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </span>
          </div>
</div>
  `
}


const courses = function(){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.add('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <p>Курсы корейского языка</p>
  `
}
courses_ads.addEventListener('click', courses)

const gks = function(){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.add('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <p>GKS</p>
  `
}
gks_ads.addEventListener('click', gks)


const topik = function (){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.add('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <p>TOPIK</p>
  `
}
topik_ads.addEventListener('click', topik)



const events = function(){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.add('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <p>Мероприятия</p>
  `
}
events_ads.addEventListener('click', events)

const miscellaneous = function(){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.add('active_btn')
  vacation_ads.classList.remove('active_btn')
  container.innerHTML = `
  <p>Разное</p>
  `
}
miscellaneous_ads.addEventListener('click', miscellaneous)

const vacation = function (){
  general_ads.classList.remove('active_btn')
  courses_ads.classList.remove('active_btn')
  gks_ads.classList.remove('active_btn')
  topik_ads.classList.remove('active_btn')
  events_ads.classList.remove('active_btn')
  miscellaneous_ads.classList.remove('active_btn')
  vacation_ads.classList.add('active_btn')
  container.innerHTML = `
  <p>Вакансии</p>
  `
}
vacation_ads.addEventListener('click', vacation)



const menu =  document.getElementById('menu__toggle')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})



// TAB PARAM
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramValue = urlParams.get('tab');


if(paramValue == 4){
  generalAds()
}
if(paramValue == 5){
  courses()
}
if(paramValue == 6){
  gks()
}
if(paramValue == 7){
  topik()
}
if(paramValue == 8){
  events()
}
if(paramValue == 9){
  miscellaneous()
}
if(paramValue == 10){
  vacation()
}