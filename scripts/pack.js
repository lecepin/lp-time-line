const gulp = require("gulp");
const babel = require("gulp-babel");
const path = require("path");

process.env.NODE_ENV = "production";

gulp.task("style_transfer", (cb) => {
  console.log("###### 样式文件转移开始 ######");
  gulp
    .src([path.join(process.cwd(), "./src/**/*.less")])
    .pipe(gulp.dest("pack"))
    .on("end", () => {
      console.log("###### 样式文件转移结束 ######");
      cb();
    });
});

gulp.task("pack_build", ["style_transfer"], (cb) => {
  console.log("###### 打包开始 ######");
  gulp
    .src([
      path.join(process.cwd(), "./src/**/*.js"),
      path.join(process.cwd(), "./src/**/*.jsx"),
    ])
    .pipe(
      babel({
        babelrc: false,
        presets: ["react", "es2015-ie", "stage-1"].map(
          (item) => `babel-preset-${item}`
        ),
        plugins: [
          "add-module-exports",
          // ["import", { libraryName: "xxxabc", camel2DashComponentName: false }],
        ].map((item) => {
          if (Array.isArray(item)) {
            return [`babel-plugin-${item[0]}`, item[1]];
          }
          return `babel-plugin-${item}`;
        }),
      })
    )
    .pipe(gulp.dest("pack"))
    .on("end", () => {
      console.log("###### 打包结束 ######");
      cb();
    });
});

gulp.start("pack_build");

// gulp
// gulp-babel

// babel-preset-react
// babel-preset-es2015-ie
// babel-preset-stage-1

// babel-plugin-add-module-exports
// babel-plugin-import

// npm i -D gulp@^3.9.0 gulp-babel@^6.1.1 babel-preset-es2015-ie@^6.6.2 babel-preset-react@^6.5.0 babel-preset-stage-1@^6.5.0 babel-plugin-add-module-exports@^0.2.0 babel-plugin-import@^1.7.0
