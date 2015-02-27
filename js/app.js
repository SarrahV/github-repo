var App = function() {

  function App(data) {

    this.data = data;

    this.$profile = $(".profile");
    this.$repo = $(".repo-content");

  }

  var repoData = (function(){
  var template = JST["repoTab"];
    function GetRepo(data) {
      this.data = data;
    }

    GetRepo.prototype = {
      render: function() {
        return $( template(this.data) );
      }

  }

  return GetRepo;

});



  return App;

})();  