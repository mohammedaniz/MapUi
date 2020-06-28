$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){
    alert('has Class')
    $('#drawer').removeClass('active');
    
   }else {
       alert('Add Active')
       $('#drawer').addClass('active');
   }
});