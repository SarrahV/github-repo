function icon(name) {
 return JST.icon({icon: name});
}

var GitPull =(function() {

  function GitPull(user) {
    this.username = user;

    var apiBase = "https://api.github.com/users/";

    this.endpoints = {
      repos: api + this.username + "/repos",
      user: api + this.username,
      orgs: api + this.username + "/orgs",
      starred: api + this.username + "/starred"
    }
  }
    GitPull.prototype = {
    hitApi: function(url, cb) {
      $.ajax(url, {
        data: {
          access_token: "8922cb1bb7aa6ab094cf2f38c545957db541216b"
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
      // calls callback with hash of data like below
      // {
      //   repos: //repo data,
      //   user: //user data,
      //   starred: //starred data,
      //   orgs: //org data
      // }
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


