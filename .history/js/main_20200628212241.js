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

$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){ 
    $('#drawer').removeClass('active');
    $('#drawer').hide(1000);
   }else {
       $('#drawer').addClass('active');
       $('#drawer').show(1000);
   }
});

$('#overlay').on('click',(e) => {
    console.log(e);
    let drawer = document.getElementsByClassName('map-container');
    if(e.target == drawer){
        $('#drawer').removeClass('active');
        $('#drawer').hide(1000);
    }
});

