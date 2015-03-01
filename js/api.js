var GitPull =(function() {

  function GitPull(user) {
    this.username = user;


    var apiBase = "https://api.github.com/users/";

    this.endpoints = {
      repos: apiBase + this.username + "/repos",
      user: apiBase + this.username,
      orgs: apiBase + this.username + "/orgs",
      starred: apiBase + this.username + "/starred"
    }
  }
  
  GitPull.prototype = {
    hitApi: function(url, cb) {
      var apiPieces = ["571ce72fd", "4706c066d", "1a0ebd942", "26501188f", "80d4"];
        $.ajax(url, {
          data: {
            access_token: apiPieces.join("")
          },
          success: function(data) {
            cb(data);
          },
          error: function() {
            console.log("Error loading", url);
          }
        });
    },

    repos: function(cb) {
      this.hitApi(this.endpoints.repos, cb);
    },

    orgs: function(cb) {
      this.hitApi(this.endpoints.orgs, cb);
    },

    starred: function(cb) {
      this.hitApi(this.endpoints.starred, cb);
    },

    user: function(cb) {
      this.hitApi(this.endpoints.user, cb);
    },

    loadAll: function(cb) {

      var dataGroups = {};

      var afterCB = _.after(4, cb);

      // 1 getting repos
      this.repos(function(data){
        dataGroups.repos = data;
        afterCB(dataGroups);
      });

      // 2 getting orgs
      this.orgs(function(data){
        dataGroups.orgs = data;
        afterCB(dataGroups);
      });

      // 3 getting user
      this.user(function(data){
        dataGroups.user = data;
        afterCB(dataGroups);
      });

      // 4 getting starred
      this.starred(function(data){
        dataGroups.starred = data;
        afterCB(dataGroups);
      });
    }
  }
  return GitPull
})();


