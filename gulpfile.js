var gulp        = require("gulp");
var less        = require("gulp-less");
var bower       = require("main-bower-files");
var concat      = require("gulp-concat");
var wrap       = require("gulp-wrap");
var declare    = require("gulp-declare");
var handlebars = require("gulp-handlebars");

var lessPath     = "less/*";
var templatePath   = "js/templates/*";



gulp.task("less", function() {
  gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest("./css"));

});

gulp.task("templates", function(){
  gulp.src(templatePath)
    .pipe(handlebars()) //send to handlebars
    .pipe(wrap("Handlebars.template(<%= contents %>)")) //wrap output into handlebars call
    .pipe(declare({
      namespace: "JST" //this name doesn't matter. It creates a global variable to store template
    }))
    .pipe(concat("templates.js")) // concats all files into one file and...
    .pipe(gulp.dest("./js/")); // sends them all to be in that file

});

gulp.task("compile:all", 
  ["less", "templates", "bower:assets:js"]);


gulp.task("bower:assets:js", function() { //adds important js files to new folder
  gulp.src(bower({filter: "**/*.js"}))               // no need to upload all to git, just the imp. ones
  .pipe(concat("vendor.js"))
  .pipe(gulp.dest("./vendor/js"));
});

gulp.task("watch", function() {
  gulp.watch(lessPath, ["less"]);
  gulp.watch(templatePath, ["templates"]);
  gulp.watch("bower.json", ["bower:assets:js"]);
});













