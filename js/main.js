function icon(name) {
  return JST.icon({icon: name}); // pulls icon into template
}

var GitHubPull =(function() {

  function GitHubPull(user) {
    this.username = user;

    var api = "https://api.github.com/users/";

    this.endpoints = {
      repos: api + this.username + "/repos",
      user: api + this.username,
      orgs: api + this.username + "/orgs",
      starred: api this.username + "/starred",
    }
  }
    return GitHubPull

})();




