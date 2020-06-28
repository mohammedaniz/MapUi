$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){ 
    $('#drawer').removeClass('active');
    $('#drawer').hide();
   }else {
       $('#drawer').addClass('active');
       $('#drawer').show();
   }
});