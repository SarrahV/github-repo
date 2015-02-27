var renderAll = function(data) {
  var userData    = data.user;
  var orgsData    = data.orgs;
  var repoData    = data.repos;
  var starredData = data.starred;

  console.log(userData);

  var renderUser = function() {
    var userTemplate = JST["user"];
    //console.log(userData);

    var createdAt = new Date(userData.created_at);
    var m = moment(createdAt);
    var formatedDate = m.format("MMM Do YYYY");

    userData.formatedDate = formatedDate;

    userData.myStars = starredData.length;

    $(".user").html(userTemplate(userData));
  };

  var renderOrgs = function() {
    var userTemplate = JST["orgs"];
    //console.log(orgsData);
    /*$(".orgs").html(userTemplate(orgsData[0]));*/


    $(".user").append(userTemplate(orgsData[0]));
  };

  
  var renderRepo = function(datum){
    var repoTemplate = JST["repoTab"];

  var updatedAt = new Date(datum.updated_at);
    var mom = moment(updatedAt);
    var formatDate = mom.fromNow();

    datum.formatDate = formatDate;
      console.log(formatDate);
      $(".repo-content").append(repoTemplate(datum));

  };

  var renderRepos =function(){
      _.each(repoData, function(myRepo) {
      renderRepo(myRepo)
    });
  };

  renderUser();
  renderOrgs();
  renderRepos();
  //renderRepos(repoData[0]);


}


