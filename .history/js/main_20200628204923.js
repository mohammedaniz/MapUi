$('#toggleSidebar').on('click',() => {
    console.log($('#draw'))
   if($('#draw').hasClass('active')){
    alert('has Class')
    $('#draw').removeClass('active');
    
   }else {
       alert('Add Active')
       $('#draw').addClass('active');
   }
});