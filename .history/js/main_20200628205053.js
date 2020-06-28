$('#toggleSidebar').on('click',() => {
    console.log($('#drawer'))
   if($('#drawer').hasClass('active')){
    alert('has Class')
    $('#drawer').removeClass('active');
    $('#drawer').hide();
   }else {
       alert('Add Active')
       $('#drawer').addClass('active');
       $('#drawer').show();
   }
});