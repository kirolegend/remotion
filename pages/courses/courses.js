new Accordion('.accordion-container');

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});

const menu =  document.getElementById('label_menu')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})



const coursesFirstTab = document.getElementById('courses_tab_f')
const courseSecondTab = document.getElementById('courses_tab_s')
const courseThirdTab = document.getElementById('courses_tab_t')

const container = document.getElementById('container')


function coursesFirstFunc(){
  coursesFirstTab.classList.add('active_btn')
  courseSecondTab.classList.remove('active_btn')
  courseThirdTab.classList.remove('active_btn')
  container.innerHTML =`
  <div class="center_flex">
  <div class="text_r">
    <div class="img_and_text">
      <div class="text_lang">
        <span class="korean_lang_text">
          <h1>Курсы корейского языка</h1>
          <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
        </span>
        <span class="korean_lang_text ">
          <h1>Содействие в развитии корейского языка в учебных заведениях и поддержка</h1>
          <p>Оказываем содействие в внедрении корейского языка в Казахстанских школах как обязательный предмет либо как предмет факультативного курса.Также, оказываем поддержку школам которые изучают корейский язык. Обеспечиваем учебниками, и направляем преподавателей носителей языка из Республики Корея.</p>
        </span>
      </div>
    </div>
    <div class="video_and_text">
      <span class="korean_lang_text">
        <h1>Курсы корейского языка</h1>
        <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
      </span>
    </div>
  </div>
  <div class="img_l">
    <span>
      <img class="img_f" src="../../img/just_img/center_f_img.png" alt="">
    </span>
    <span class="img_s_t">
      <img src="../../img/just_img/center_s_img.png" alt="">
      <img src="../../img/just_img/center_t_img.png" alt="">
    </span>
  </div>
</div>
  `
}
coursesFirstTab.addEventListener('click', coursesFirstFunc)


function coursesSecondFunc(){
  coursesFirstTab.classList.remove('active_btn')
  courseSecondTab.classList.add('active_btn')
  courseThirdTab.classList.remove('active_btn')
  container.innerHTML =`
  qwerty`
}
courseSecondTab.addEventListener('click', coursesSecondFunc)


function coursesThirdFunc(){
  coursesFirstTab.classList.remove('active_btn')
  courseSecondTab.classList.remove('active_btn')
  courseThirdTab.classList.add('active_btn')
  container.innerHTML =`
  <h1 class="title">
        <img src="../../img/icons/icon_title.svg" alt="">
        Материалы для уроков 
      </h1>
      <div class="mat_container">
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
        <a href="">
          <button class="doc_btn">
            <img src="../../img/icons/doc.svg" alt="">
            дополнительная книга 1-2 <br> для второго уровня
          </button>
        </a>
  `
}
courseThirdTab.addEventListener('click', coursesThirdFunc)



var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramValue = urlParams.get('tab');
if(paramValue == 11){
  coursesFirstFunc()
}
if(paramValue == 12){
  coursesSecondFunc()
}
if(paramValue == 13){
  coursesThirdFunc()
}