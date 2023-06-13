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