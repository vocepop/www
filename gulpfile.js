var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var fileinclude = require("gulp-file-include");

gulp.task("sass", function () {
  return gulp.src("assets/sass/**/*.scss").pipe(sass()).pipe(gulp.dest("assets/css"));
});

gulp.task("fileinclude", function () {
  gulp
    .src(["src/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
  gulp.watch("assets/sass/**/*.scss", gulp.parallel(["sass"]));
  gulp.watch("src/*.html", gulp.parallel(["fileinclude"]));
});

gulp.task("default", gulp.parallel("sass", "fileinclude", "watch"));
