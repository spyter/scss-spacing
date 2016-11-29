var gulp = require("gulp"),
    sass = require("gulp-sass"),
    del = require("del"),
    plumber = require("gulp-plumber"),
    auto_prefixer = require("gulp-autoprefixer"),
    clean_css = require("gulp-clean-css"),
    run_sequence = require("run-sequence");

gulp.task("clean", () => {
    return del([
        "./dist/**",
        "!./dist"
    ]);
});

gulp.task("build:css", () => {
    return gulp
        .src([
            "./src/*.scss"
        ])
        .pipe(plumber())
        .pipe(sass())
        .pipe(auto_prefixer({ browsers: ["last 2 versions"] }))
        .pipe(clean_css())
        .pipe(gulp.dest("./dist"));
});

gulp.task("build", () => {
    return run_sequence("clean", "build:css");
});

gulp.task("default", ["build"]);