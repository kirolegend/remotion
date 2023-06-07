new Accordion('.accordion-container');

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});

const container = document.getElementById('container')
const menu =  document.getElementById('label_menu')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})

const learnBtnF = document.getElementById('learn_btn_f')
const learnBtnS = document.getElementById('learn_btn_s')

learnBtnF.addEventListener('click', learnBtnFirtsFunc)
function learnBtnFirtsFunc (){
  learnBtnF.classList.add('active_btn')
  learnBtnS.classList.remove('active_btn')
  container.innerHTML = `
   <h1 class="title">
  <img src="../../img/icons/icon_title.svg" alt="">
  Информация о вузах
</h1>
<div class="cards">
  <div class="card_item">
    <span>
      <img class="card_img" src="../../img/just_img/uni_card.png" alt="">
    </span>
    <span>
      <h3 class="card_title">Пхоханский университет науки и технологии (POSTECH)</h3>
      <ul class="under_title">
        <li>Категория: частный</li>
        <li>Адресс: г. Пхохан</li>
        <li>Дата основания: 1986 г.</li>
      </ul>
    </span>
    <a href="../ads/student.html">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <span>
      <img class="card_img" src="../../img/just_img/uni_card.png" alt="">
    </span>
    <span>
      <h3 class="card_title">Пхоханский университет науки и технологии (POSTECH)</h3>
      <ul class="under_title">
        <li>Категория: частный</li>
        <li>Адресс: г. Пхохан</li>
        <li>Дата основания: 1986 г.</li>
      </ul>
    </span>
    <a href="../ads/student.html">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <span>
      <img class="card_img" src="../../img/just_img/uni_card.png" alt="">
    </span>
    <span>
      <h3 class="card_title">Пхоханский университет науки и технологии (POSTECH)</h3>
      <ul class="under_title">
        <li>Категория: частный</li>
        <li>Адресс: г. Пхохан</li>
        <li>Дата основания: 1986 г.</li>
      </ul>
    </span>
    <a href="../ads/student.html">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
  <div class="card_item">
    <span>
      <img class="card_img" src="../../img/just_img/uni_card.png" alt="">
    </span>
    <span>
      <h3 class="card_title">Пхоханский университет науки и технологии (POSTECH)</h3>
      <ul class="under_title">
        <li>Категория: частный</li>
        <li>Адресс: г. Пхохан</li>
        <li>Дата основания: 1986 г.</li>
      </ul>
    </span>
    <a href="../ads/student.html">
      <img class="arrow" src="../../img/icons/arrow.svg" alt="">
    </a>
  </div>
</div>
  `
}


learnBtnS.addEventListener('click', learnBtnSecondFunc)
function learnBtnSecondFunc (){
  learnBtnF.classList.remove('active_btn')
  learnBtnS.classList.add('active_btn')
  container.innerHTML = `
  <h1 class="title">
  <img src="../../img/icons/icon_title.svg" alt="">
  Объявления о наборе студентов
</h1>
<div class="list">
  <div class="list_item list_bg">Номер</div>
  <div class="list_item list_bg">Название</div>
  <div class="list_item list_bg">Дата</div>
</div>
<div class="list">
  <div class="list_item">1</div>
  <div class="list_item">[Инха университет] Набор иностранных студентов на 2020 г.</div>
  <div class="list_item">2019.11.05</div>
</div>
<div class="list">
  <div class="list_item">1</div>
  <div class="list_item">[Инха университет] Набор иностранных студентов на 2020 г.</div>
  <div class="list_item">2019.11.05</div>
</div>
<div class="list">
  <div class="list_item">1</div>
  <div class="list_item">[Инха университет] Набор иностранных студентов на 2020 г.</div>
  <div class="list_item">2019.11.05</div>
</div>
<div class="list">
  <div class="list_item">1</div>
  <div class="list_item">[Инха университет] Набор иностранных студентов на 2020 г.</div>
  <div class="list_item">2019.11.05</div>
</div>
  `
}


var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramValue = urlParams.get('tab');

if(paramValue == 14){
  learnBtnFirtsFunc()
}
if(paramValue == 15){
  learnBtnSecondFunc()
}