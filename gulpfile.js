const gulp = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const sassGlob = require("gulp-sass-glob");
gulp.task("remove:html", () => {
    // remove all files exept fonts folder
    return gulp.src(["./dist/**/*", "!./dist/fonts"])
    .pipe(rm());
});

gulp.task("copy:img", () => {
    return gulp.src("./src/images/*.png")
    .pipe(gulp.dest("./dist/images"));
});

gulp.task("copy:html", () => {
    return gulp.src("./src/*.html")
    .pipe(gulp.dest("./dist"));
});

gulp.task("sass", () => {
    return gulp.src(["./src/styles/main.scss"])
    //.pipe(sass().on("error", sass.logError))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/styles"));
});

gulp.task("default", gulp.series("remove:html","copy:html","copy:img","sass"));