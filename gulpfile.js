const gulp = require("gulp");
const rm = require("gulp-rm");

gulp.task("remove", () => {
    return gulp.src("./dist/**/*", {read: false})
    .pipe(rm());
});

gulp.task("copy", () => {
    return gulp.src("./src/*.html")
    .pipe(gulp.dest("./dist"));
});