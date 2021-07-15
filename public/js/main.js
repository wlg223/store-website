$(function() {
    var template = $('#hidden-template').html();
    
    var results =  [{boxName:"Devito1",boxText:"Lorem Ipsum",boxImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{boxName:"devito2",boxText:"dolor sit amet",boxImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{boxName:"devito3",boxText:"consectetur",boxImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"}];
  
  
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