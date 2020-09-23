const { series } = require("gulp");
var gulp = require("gulp");
var sass = require("gulp-sass");
var uglifycss = require("gulp-uglifycss");

gulp.task("sass", function () {
  return gulp
    .src("./src/sass/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"));
});

gulp.task("css", function () {
  return gulp
    .src("./src/css/*.css")
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./src/dist/"));
});

gulp.task("run", gulp.series(["sass", "css"]));

gulp.task("watch", function () {
  gulp.watch("./src/sass/*.sass", gulp.series("sass"));
  gulp.watch("./src/css/*.css", gulp.series(["css"]));
  return;
});

gulp.task("default", series(["run", "watch"]));
