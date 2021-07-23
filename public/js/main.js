$(function() {
    var template = $('#hidden-template').html();
    
    var results =  [{boxName:"Devito1",boxText:"Lorem Ipsum",boxImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{boxName:"devito2",boxText:"dolor sit amet",boxImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{boxName:"devito3",boxText:"consectetur",boxImage:"https://scontent.fwbw1-1.fna.fbcdn.net/v/t1.18169-9/558567_229706677127535_1123159924_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=R98bqxTBnzcAX_1yUYr&_nc_ht=scontent.fwbw1-1.fna&oh=5a26a57326f92253681f3c13a0821501&oe=60F58CCD"}];
  
  
  //reset 
    $('#target').html("");
  
  //load from json
    $.each(results, function (i, item) {
      var box = item; 
      
      var myTemplate = $(template).clone();
     
      $(myTemplate).find('#box-name').text(box.boxName);
      $(myTemplate).find('#box-text').text(box.boxText);
      $(myTemplate).find('#box-image').attr("src",box.boxImage);
      
      $('#target').append(myTemplate);
    });
  });