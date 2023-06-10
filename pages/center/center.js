new Accordion('.accordion-container');

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.85724, 74.604053],
    zoom: 13
  });
  DG.marker([42.85724, 74.604053]).addTo(map);
});



// CENTER TABS
let centerTabFirst = document.getElementById('center_tab_f')
let centerTabSecond = document.getElementById('center_tab_s')
let centerTabThird = document.getElementById('center_tab_t')
const container = document.getElementById('container')


function firstTab(){
  centerTabFirst.classList.add('active_btn')
  centerTabSecond.classList.remove('active_btn')
  centerTabThird.classList.remove('active_btn')
  container.innerHTML =` <div class="post_container">
  <div class="text_director">
    <h1 class="title">
      <img src="../../img/icons/icon_title.svg" alt="">
      Приветственное слово директора центра образования 
    </h1>
    <div class="tab_container">
      <p>От всей души приветствую всех посетителей сайта Центра Образования Р.Корея в г.Бишкек.Центр Образования Р.Корея в г.Бишкек был основан в мае 2001 года, основной деятельностью является воспитание самоидентификации зарубежных этнических корейцев, поддержка корейских школ, предоставление информации об учебе в Корее, распространение корейского языка в Кыргызской Республике и другое. В нашем Центре более 660 учащихся в 17-ти группах на бесплатной основе изучают корейский язык и корейскую культуру. Тем самым Центр Образования играет важную роль в улучшении имиджа Кореи здесь в Кыргызской Республике. Кроме того, в рамках программ по распространению корейского языка, Центр проводит эффективные занятия по корейскому языку в 19 средних общеобразовательных школах Кыргызской Республики, где изучают корейский язык более 1,120 учащихся, а также корейский язык изучают в 15 университетах более 2,200 студентов, и с каждым годом число таких учебных заведений и учащихся, изучающих корейский язык, увеличивается.</p>
      <p>Наш Центр Образования Р.Корея в г.Бишкек в будущем продолжит поддерживать образование для этнических корейцев, и приложит все усилия для укрепления дружеских взаимоотношений между Республикой Корея и Кыргызской Республикой. Просим Вас проявлять интерес и оказывать поддержку. С благодарностью</p>
      <p>Директор Центра Образования Р.Корея в г.Бишкек Ким Джэёнг</p>
    </div>
  </div>
  <div class="director">
    <img src="../../img/just_img/director.png" alt="">
  </div>
</div>`
}
centerTabFirst.addEventListener('click', firstTab)



function secondTabFunc(){
  centerTabFirst.classList.remove('active_btn')
  centerTabSecond.classList.add('active_btn')
  centerTabThird.classList.remove('active_btn')
  container.innerHTML =` <p> qwerty</p>`
}
centerTabSecond.addEventListener('click', secondTabFunc)

function thirdTab(){
  centerTabFirst.classList.remove('active_btn')
  centerTabSecond.classList.remove('active_btn')
  centerTabThird.classList.add('active_btn')
  container.innerHTML =`
  <div class="second_container">
      <h1 class="title">
        <img src="../../img/icons/icon_title.svg" alt="">
        Деятельность центра
      </h1>
    </div>
    <div class="tabs tabs_second">
      <button class="active_btn" id="center_tab_thirdTab_first">
        Распространение кор.языка
      </button>
      <button id="center_tab_thirdTab_second">
        Деятельность по поддержке иностранных студентов
      </button>
    </div>
    <div id="container_thirdTab">
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
        <div class="image">
          <img src="../../img/just_img/lang_img.png" alt="">
        </div>
      </div>
      <div class="video_and_text">
        <iframe width="580" height="330" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <span class="korean_lang_text">
          <h1>Курсы корейского языка</h1>
          <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
        </span>
      </div>
    </div>    
  `

  const thirdTab_first = document.getElementById('center_tab_thirdTab_first')

  thirdTab_first.addEventListener('click', () => {
    const containerThirdTab = document.getElementById('container_thirdTab')
    thirdTab_first.classList.toggle('active_btn')
    thirdTab_second.classList.toggle('active_btn')
    containerThirdTab.innerHTML =`
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
          <div class="image">
            <img src="../../img/just_img/lang_img.png" alt="">
          </div>
        </div>
        <div class="video_and_text">
          <iframe width="580" height="330" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <span class="korean_lang_text">
            <h1>Курсы корейского языка</h1>
            <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
          </span>
        </div>
    `
  })
  const thirdTab_second = document.getElementById('center_tab_thirdTab_second');
  thirdTab_second.onclick = () => {
    thirdTab_first.classList.toggle('active_btn')
    thirdTab_second.classList.toggle('active_btn')
    const container_thirdTab = document.getElementById('container_thirdTab');
    container_thirdTab.innerHTML = `
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
        <!-- <div class="image">
          <img src="../../img/just_img/lang_img.png" alt="">
        </div> -->
      </div>
      <div class="video_and_text">
        <!-- <iframe width="580" height="330" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
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
    `;
  }
}
centerTabThird.addEventListener('click', thirdTab)







const menu =  document.getElementById('label_menu')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})



var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var paramValue = urlParams.get('tab');

if (paramValue == 1){
  firstTab()
}
if (paramValue == 2){
  secondTabFunc()
}
if (paramValue == 3){
  thirdTab()
}