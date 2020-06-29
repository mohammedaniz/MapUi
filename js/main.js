
// initial hidden elements Setup
$('#drawer').hide();

//leaflet setup
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

    marker.bindPopup("<ul class='list-group list-group-flush'><li class='list-group-item' onclick='openDrawer(1)'>First item</li><li onclick='openDrawer(2)' class='list-group-item'>Second item</li><li onclick='openDrawer(3)' class='list-group-item'>Third item</li><li onclick='openDrawer(4)' class='list-group-item'>First item</li><li class='list-group-item' onclick='openDrawer(5)'>Second item</li><li class='list-group-item' onclick='openDrawer(6)'>Third item</li></ul>").openPopup();


// toggle side drawer function    
function openDrawer(id){
    console.log('Clicked ', id)
    if( $('#drawer').hasClass('active')){
        console.log('active')
        $('#drawer').removeClass('active');
        $('#drawer').hide(500);
        document.getElementById("overlay").style.display = "none";
    }else {
        console.log('not active');
        $('#drawer').addClass('active');
        $('#drawer').show(500);
        document.getElementById("overlay").style.display = "block";
    }
}


//toggle overlay setup

$('#overlay').on('click',(e) => {
   let isDrawerActive = $('#drawer').hasClass('active');
   if(isDrawerActive){
    $('#drawer').removeClass('active');
    $('#drawer').hide(500);
    document.getElementById("overlay").style.display = "none";
   }
});

