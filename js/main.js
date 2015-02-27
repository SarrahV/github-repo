$(function(){

  var api = new GitPull("SarrahV"); // creates a new instance with username as data

  var renderAll = (function(data) {  // create a callback that takes 

    console.log(data);
  })

  api.loadAll(renderAll);  // loading the api variable with data and using the renderAll function to display it

});





