const gulp = require("gulp")//引入gulp模块
	sass = require("gulp-sass"),
	connect = require("gulp-connect"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	cleanCss = require("gulp-clean-css"),
	imagemin = require("gulp-imagemin"),
	babel = require("gulp-babel");
	
//拷贝
gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

gulp.task("copy-html",function(){
	gulp.src("html/**").pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})

gulp.task("copy-js",function(){
	gulp.src("js/**").pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//拷贝图片文件   /**复制当前文件下的所有子文件；/**/*复制当前文件下的子文件以及子文件中的文件
gulp.task("copy-img",function(){//   
	gulp.src("images/**").pipe(gulp.dest("dist/images"));
})


/*gulp.task("data",function(){//复制和排除复制某文件
	gulp.src(["xml/*.txt","!json/*.json"]).pipe(gulp.dest("dist/data"));
})*/


//sass
gulp.task("sass",function(){
	gulp.src("sass/**.scss")
	.pipe(sass())
	//.pipe(cleanCss())//css压缩
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
})

//搭建本地服务器

gulp.task("sever",function(){
	connect.server(
		{
			root:"dist",//根目录
			livereload:true//时时刷新
		});
})

//watch
gulp.task("watch",function(){//监听
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("html/**",["copy-html"]);
	gulp.watch("js/**",["copy-js"]);
	gulp.watch("images/**",["copy-img"]);
	//gulp.watch(["xml/*.txt","!json/*.json"],["data"]);
	gulp.watch("sass/**.scss",["sass"]);
    gulp.watch("images/**",["images"])
	
})


gulp.task("default",["sever","watch"]);
//合并文件
/*gulp.task("scripts",function(){
	gulp.src("js/**")
	.pipe(concat("main.js"))//合并
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//压缩
	.pipe(rename("main.min.js"))//保留前后压缩的文件
	.pipe(gulp.dest("dist/js"))
	
})*/


//图片压缩
//gulp.task("images",function(){
//	gulp.src("images/**/*")
//	.pipe(imagemin())
//	.pipe(gulp.dest("dist/images"))
//})

//Es6转换为Es5

//gulp.task("default",function(){
//	gulp.src("js/app.js")
//	.pipe(babel({"presets":["es2015"]}))
//	.pipe(gulp.dest("dist/js"));
//})