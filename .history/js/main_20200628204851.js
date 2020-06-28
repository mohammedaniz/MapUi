$('#toggleSidebar').on('click',() => {
   if($('#draw').hasClass('active')){
    alert('has Class')
    $('#draw').removeClass('active');
    
   }else {
       alert('Add Active')
       $('#draw').addClass('active');
   }
});