$(function() {
    var template = $('#hidden-template').html();
    
    var results =  [{name:"Devito1",price:"Lorem Ipsum",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{name:"devito2",price:"dolor sit amet",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{name:"devito3",price:"consectetur",image:"https://scontent.fwbw1-1.fna.fbcdn.net/v/t1.18169-9/558567_229706677127535_1123159924_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R98bqxTBnzcAX_1yUYr&_nc_ht=scontent.fwbw1-1.fna&oh=5a26a57326f92253681f3c13a0821501&oe=60F58CCD"}];
  
  
  //reset 
    $('#target').html("");
  
  //load from json
    $.each(results, function (i, item) {
      var box = item; 
      
      var myTemplate = $(template).clone();
     
      $(myTemplate).find('#name').text(box.name);
      $(myTemplate).find('#price').text(box.price);
      $(myTemplate).find('#image').attr("src",box.image);
      
      $('#target').append(myTemplate);
    });
  });