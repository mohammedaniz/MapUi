let mapId = document.getElementById('mapId');
var mymap = L.map('mapId').setView([51.505, -0.09], 13);

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