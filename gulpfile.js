const gulp = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const sassGlob = require("gulp-sass-glob");
gulp.task("remove:html", () => {
    return gulp.src("./dist/**/*", {read: false})
    .pipe(rm());
});

gulp.task("copy:html", () => {
    return gulp.src("./src/*.html")
    .pipe(gulp.dest("./dist"));
});

gulp.task("sass", () => {
    return gulp.src("./src/styles/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/styles"));
});

gulp.task("default", gulp.series("remove:html", "copy:html", "sass"));