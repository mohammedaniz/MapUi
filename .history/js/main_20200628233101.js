$('#drawer').hide();
let mapId = document.getElementById('mapId');
var mymap = L.map('mapId').setView([51.505, -0.09], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXFpYmFsaSIsImEiOiJja2JwNzEwcGUxZ2NuMnFwOXZzcWMyZGJoIn0.p4yxqsXttDeUPQ6RrCHMig'
    }).addTo(mymap);

    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    var popup = L.popup();

    marker.bindPopup("<ul class='list-group list-group-flush'><li class='list-group-item'>First item</li><li class='list-group-item'>Second item</li><li class='list-group-item'>Third item</li><li class='list-group-item'>First item</li><li class='list-group-item'>Second item</li><li class='list-group-item'>Third item</li></ul>").openPopup();

$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){ 
    $('#drawer').removeClass('active');
    $('#drawer').hide(500);
   }else {
       $('#drawer').addClass('active');
       $('#drawer').show(500);
   }
});
let acc = document.getElementById('accordion');
function on() {
   document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
   document.getElementById("overlay").style.display = "none";
  }
  
  $('.list-group-item').on('click',() => {
    $('#drawer').addClass('active');
    $('#drawer').show(500);
  });
$('.map').on('click',(e) => {
   let isDrawerActive = $('#drawer').hasClass('active');
   if(isDrawerActive){
    $('#drawer').removeClass('active');
    $('#drawer').hide(500);
    off();
   }
});

