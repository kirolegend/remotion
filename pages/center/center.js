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
  container.innerHTML =` 
  <div class="post_container">
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
  container.innerHTML =`
  <h1 class="title title_second">
      <img src="../../img/icons/icon_title.svg" alt="">
      История и основная информация
    </h1>
    <div class="cards_center">
      <div class="position">
        <img class="position_img" class="middle_img" src="../../img/center_img/Group 528.png" alt="">
      </div>
      <div class="card_item_center">
        <p class="data data_1">01.03.2022</p>
        <p>В Центре проводятся занятия в 52 группах (1756 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)</p>
      </div>
      <div class="card_item_center">
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 8-го директора Центра Ким Джэёнг</p>
      </div>
       <div class="card_item_center">
        <p class="data data_2">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 50 группах (1674 учащихся) Проводятся занятия по корейскому языку в 61 общеобразовательных школах (219 группы, 5850 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_3">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 51 группах (1698 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_4">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 51 группах (1698 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_5">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 7-го директора Центра Ким Дэ Гван</p>
      </div>
      <div class="card_item_center">
        <p class="data data_6">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 49 группах (1525 учащихся) Проводятся занятия по корейскому языку в 46 общеобразовательных школах (164 группы, 4260 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_7">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 49 группах (1525 учащихся) Проводятся занятия по корейскому языку в 46 общеобразовательных школах (164 группы, 4260 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_8">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>В Центре проводятся занятия в 49 группах (1525 учащихся) Проводятся занятия по корейскому языку в 46 общеобразовательных школах (164 группы, 4260 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_9">01.03.2022</p>
        <p>В Центре проводятся занятия в 49 группах (1525 учащихся) Проводятся занятия по корейскому языку в 46 общеобразовательных школах (164 группы, 4260 учащихся)</p>
      </div>
      <div class="card_item_center">
        <p class="data data_10">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_11">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_12">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_13">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_14">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_15">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_16">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
      <div class="card_item_center">
        <p class="data data_17">01.03.2022</p>
        <img src="../../img/center_img/image 21 (2).png" alt="">
        <p>Вступление в должность 6-го директора Центра Мин Дже Щик</p>
      </div>
    </div>

    <!-- MOBILE -->
    <div class="cards_center_mobile mobile_1">
      <img class="modbile_center_img" src="../../img/center_img/Group 487.png" alt="">
      <div class="card_item_mobile mobile_1">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt="">
        <p>Вступление в должность 8-го директора Центра Ким Джэёнг</p>
      </div>
      <div class="card_item_mobile mobile_2">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt="">
        <p>
          В Центре проводятся занятия в 51 группах (1698 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)
        </p>
      </div>
      <div class="card_item_mobile mobile_3">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <!-- <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt=""> -->
        <p>
          В Центре проводятся занятия в 52 группах (1756 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)
        </p>
      </div>
      <div class="card_item_mobile mobile_4">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt="">
        <p>
          В Центре проводятся занятия в 52 группах (1756 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)
        </p>
      </div>
      <div class="card_item_mobile mobile_5">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt="">
        <p>
          В Центре проводятся занятия в 52 группах (1756 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)
        </p>
      </div>
      <div class="card_item_mobile mobile_6">
        <h1 class="data_mobile data_mobile_1">01.03.2022</h1>
        <img class="image_mobile" src="../../img/center_img/image_mobile.png" alt="">
        <p>
          В Центре проводятся занятия в 52 группах (1756 учащихся) Проводятся занятия по корейскому языку в 64 общеобразовательных школах (239 группы, 5104 учащихся)
        </p>
      </div>
    </div>
    <img class="bg_el bg_left_2" src="../../img/bg/Ellipse 30.png" alt="">
  <img class="bg_el bg_left_3" src="../../img/bg/ellipse_left.png" alt="">
  <img class="bg_el bg_left_4" src="../../img/bg/Ellipse 30.png" alt="">
  `
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
        <span class="korean_lang_text">
          <h1>Курсы корейского языка</h1>
          <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
        </span>
      </div>
    </div>
  <div class="yt_and_img">
    <div class="yt">
      <iframe width="580" height="340" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="swiper_img">
      <div id="carouselExampleIndicators" class="carousel slide container ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item modal-carousel active">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item modal-carousel">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item modal-carousel">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
  </div>   
</div>
  `

  const thirdTab_first = document.getElementById('center_tab_thirdTab_first')

  thirdTab_first.addEventListener('click', () => {
    const containerThirdTab = document.getElementById('container_thirdTab')
    thirdTab_first.classList.toggle('active_btn')
    thirdTab_second.classList.toggle('active_btn')
    containerThirdTab.innerHTML =`
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
            <span class="korean_lang_text">
              <h1>Курсы корейского языка</h1>
              <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
            </span>
        </div>
      </div>
      <div class="yt_and_img">
        <div class="yt">
          <iframe width="580" height="340" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="swiper_img">
        <div id="carouselExampleIndicators" class="carousel slide container ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item modal-carousel active">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item modal-carousel">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item modal-carousel">
            <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </div>
      </div>
    </div>
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
          <span class="korean_lang_text">
            <h1>Курсы корейского языка</h1>
            <p>Одной из основных деятельностей центра является курсы корейского языка, всего 8 уровней,начиная с начального заканчивая продвинутым уровнем. Количество студентов, изучающих корейский язык в центре, превышает 3000 человек в год.</p>
          </span>
      </div>
    </div>
    <div class="yt_and_img">
      <div class="yt">
        <iframe width="580" height="340" src="https://www.youtube.com/embed/Nzr4e7N2Jgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="swiper_img">
      <div id="carouselExampleIndicators_2" class="carousel slide container ">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item modal-carousel active">
          <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item modal-carousel">
          <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item modal-carousel">
          <img src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators_2" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    </div>
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


// const swiperF = new Swiper('#swiper_1', {
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// const swiperS = new Swiper('#swiper_2', {
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });