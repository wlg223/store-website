$(function() {
    var template = $('#hidden-template').html();
    
    var results =  [{name:"Devito1",price:"Lorem Ipsum",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{name:"devito2",price:"dolor sit amet",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg"},{name:"devito3",price:"consectetur",image:""}];
  
  
  //reset 
    $('#target').html("");
  
  //load from json
    $.each(results, function (i, item) {
      var box = item; 
      
      var myTemplate = $(template).clone();
     
      $(myTemplate).find('.name').text(box.name);
      $(myTemplate).find('.price').text(box.price);
      $(myTemplate).find('.image').attr("src",box.image);
      
      $('#target').append(myTemplate);
    });
  });