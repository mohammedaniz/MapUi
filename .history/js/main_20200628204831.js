$('#toggleSidebar').on('click',() => {
   if($('#draw').hasClass('active')){
    $('#draw').removeClass('active')
   }else {
       alert('Add Active')
       $('#draw').addClass('active');
   }
});