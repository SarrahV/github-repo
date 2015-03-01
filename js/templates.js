this["JST"] = this["JST"] || {};
this["JST"]["orgs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"orgs\">\n  <h2>Organizations</h2>\n  <span><img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></span>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repoTab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"repo-tab\">\n   <div class=\"repo-tab-left\">\n    <h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n    <h4>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n    <h5>Updated "
    + escapeExpression(((helper = (helper = helpers.formatDate || (depth0 != null ? depth0.formatDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatDate","hash":{},"data":data}) : helper)))
    + "</h5>\n  </div>\n  <div class=\"repo-tab-right\">\n  <ul class=\"repo-icons\">\n    <li>"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</li>\n    <li><span class=\"octicon octicon-star\"></span> "
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</li>\n    <li><span class=\"octicon octicon-git-branch\"></span> "
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</li>\n  </ul>\n  </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"user-name\">  \n  <span><img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></span>\n  <h1>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n  <h3>"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n<div class=\"user-details\">\n  <ul>\n    <li><span class=\"octicon octicon-location\"></span>"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</li>\n    <li><span class=\"octicon octicon-clock\"></span> Joined on "
    + escapeExpression(((helper = (helper = helpers.formatedDate || (depth0 != null ? depth0.formatedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formatedDate","hash":{},"data":data}) : helper)))
    + "</li>\n  </ul>\n</div>\n<div class=\"stats\">\n  <ul>\n    <li><span>"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</span><p>Followers</p></li>\n    <li>\n      <span>"
    + escapeExpression(((helper = (helper = helpers.myStars || (depth0 != null ? depth0.myStars : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myStars","hash":{},"data":data}) : helper)))
    + "</span>\n      <p>Starred</p>\n    </li>\n    <li>\n      <span>"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</span>\n      <p>Following</p>\n    </li>\n  </ul>\n</div>\n\n\n\n";
},"useData":true});