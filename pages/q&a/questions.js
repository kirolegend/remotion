new Accordion('.accordion-container');
// var map;

// DG.then(function () {
//   map = DG.map('map', {
//     center: [42.85724, 74.604053],
//     zoom: 13
//   });
//   DG.marker([42.85724, 74.604053]).addTo(map);
// });

const menu =  document.getElementById('menu__toggle')
const menu_box =  document.getElementById('menu')

menu.addEventListener('click', () => {
  menu_box.classList.toggle('d-none')
})




  document.querySelectorAll('.accordeon-section').forEach(function(section){
    section.addEventListener('click', function(e){
      
      document.querySelectorAll('.accordeon-section').forEach(function(section){
        section.classList.remove('opened')
      })
      e.target.closest('.accordeon-section').classList.add('opened')
    })
  })
