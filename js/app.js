var renderAll = function(data) {
  var userData    = data.user;
  var orgsData    = data.orgs;
  var starredData = data.starred;

  console.log(userData);

  var renderUser = function() {
    var userTemplate = JST["user"];
    console.log(userData);
    $(".user").html(userTemplate(userData));
  };

  var renderOrgs = function() {
    var userTemplate = JST["orgs"];
    console.log(orgsData);
    /*$(".orgs").html(userTemplate(orgsData[0]));*/
    $(".user").append(userTemplate(orgsData[0]));
  };
  
  var renderRepos = function(){
    var userTemplate = JST["repoTab"];
    console.log(userData);
    $(".repo-content")._each.append(userTemplate(userData));
  };

  renderUser();
  renderOrgs();
  /*renderRepos();*/

  // return renderAll;
}


