$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){ 
    $('#drawer').removeClass('active');
    $('#sidebar').hide();
   }else {
       $('#drawer').addClass('active');
       $('#sidebar').show();
   }
});