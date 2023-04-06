// import {del} from 'del'
const del          = require('del');
const gulp         = require('gulp');
const fs           = require('fs');
const browserSync  = require('browser-sync');
const pug          = require('gulp-pug');
const cleanCss     = require('gulp-clean-css');
const sass         = require('gulp-sass')(require('sass'));
const groupMedia   = require('gulp-group-css-media-queries');
const autoprefixer = require('autoprefixer');
const postcss      = require('gulp-postcss');
const concat       = require('gulp-concat');
const imagemin     = require('gulp-imagemin');
const webp         = require('gulp-webp');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const svgSprite    = require('gulp-svg-sprite');
const svgmin       = require('gulp-svgmin');
const cheerio      = require('gulp-cheerio');
const replace      = require('gulp-replace');

var paths = {
	dirs: {
		build: './build'
	},
	html: {
		blocks: './src/blocks/',
		src: './src/pages/*.pug',
		dest: './build',
		watch: ['./src/pages/*.pug', './src/templates/*.pug', './src/blocks/**/*.pug']
	},
	css: {
		libsCSS: [
			'./node_modules/swiper/swiper.min.css',
			'./src/styles/libs/**/*.css',
		],
		src: ['./src/styles/style.sass' ],
		dest: './build/css',
		watch: ['./src/blocks/**/*', './src/styles/**/*']
	},
	js: {
		libsJS: [
			'./node_modules/lazysizes/lazysizes.min.js',
			'./node_modules/swiper/swiper-bundle.min.js',
			'./src/libs/*.js'],
		src: ['./src/blocks/**/*.js'],
		dest: './build/js',
		watch: ['./src/blocks/**/*.js', './src/libs/*.js'],
		watchPlugins: './src/scripts/libs/*.js'
	},
	images: {
		src: './src/blocks/**/img/*',
		dest: './build/img',
		watch: ['./src/blocks/**/img/*']
	},
	icons: {
		src: './src/icons/*',
		dest: './build/img',
		watch: ['./src/icons/*']
	},
	fonts: {
		src: './src/fonts/**/*',
		dest: './build/fonts',
		watch: './src/fonts/**/*'
	}
};



gulp.task('clean', function () {
	return del(paths.dirs.build);
});

gulp.task('sprite', function () {
	return gulp.src(paths.icons.src)
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					// render: {
					// 	scss: {
					// 		dest:'../../../sass/_sprite.scss',
					// 		template: assetsDir + "sass/templates/_sprite_template.scss"
					// 	}
					// }
				}
			}
		}))
		.pipe(gulp.dest(paths.icons.dest))
});

gulp.task('templates', function () {
	return gulp.src(paths.html.src)
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.html.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('styles', function () {
	return gulp.src(paths.css.src)
		// .pipe(plumber())
		.pipe(sass())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(groupMedia())
		.pipe(gulp.dest(paths.css.dest))
		// .pipe(cleanCss({ level: 2}))
		// .pipe(rename({suffix: ".min"}))
		// .pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('libsCSS', function () {
	return gulp.src(paths.css.libsCSS)
		.pipe(plumber())
		.pipe(cleanCss({
				level: 2,
				format: 'beautify'
		}))
		.pipe(gulp.dest(paths.css.dest));
});

gulp.task('scripts', function () {
	return gulp.src(paths.js.src)
		.pipe(plumber())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('libsJS', function () {
	return gulp.src(paths.js.libsJS)
		.pipe(plumber())
		.pipe(gulp.dest(paths.js.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('imgDev', function () {
	return gulp.src(paths.images.src)
		.pipe(plumber())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.images.dest))
		.pipe(webp())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.images.dest));
});

gulp.task('imgBuild', function () {
	return gulp.src(paths.images.src)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.images.dest))
		.pipe(webp())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.images.dest));
});

gulp.task('fonts', function () {
	return gulp.src(paths.fonts.src)
		.pipe(plumber())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.fonts.dest));
});

gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: paths.dirs.build
		},
		reloadOnRestart: true,
		// tunnel: 'my-project-name'
	});

	const allBlocks = paths.html.blocks;

	gulp.watch(allBlocks).on('addDir', function() {
		var dirs = fs.readdirSync(allBlocks);
		for(i = 0; i < dirs.length;i++){
			if(fs.existsSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.pug') === false && fs.existsSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.sass') === false && fs.existsSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.js') === false){
				fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.pug', '//'+dirs[i]);
				fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.js', '//'+dirs[i]);
				fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.sass', '//'+dirs[i]);
			}
			try {
				fs.statSync(allBlocks+'/'+dirs[i]+'/img');
			}
			catch (err) {
				if (err.code === 'ENOENT') {
					fs.mkdirSync(allBlocks+'/'+dirs[i]+'/img');
				}
			}
			// try {
			// 	fs.statSync(allBlocks+'/'+dirs[i]+'/icons');
			// }
			// catch (err) {
			// 	if (err.code === 'ENOENT') {
			// 		fs.mkdirSync(allBlocks+'/'+dirs[i]+'/icons');
			// 	}
			// }
		}
	});

	gulp.watch(paths.html.watch, gulp.parallel('templates'));
	gulp.watch(paths.css.watch, gulp.parallel('styles'));
	gulp.watch(paths.js.watch, gulp.parallel('scripts'));
	gulp.watch(paths.js.watch, gulp.parallel('libsJS'));
	gulp.watch(paths.images.watch, gulp.parallel('imgDev'));
	gulp.watch(paths.images.watch, gulp.parallel('imgBuild'));
	gulp.watch(paths.fonts.watch, gulp.parallel('fonts'));
	gulp.watch(paths.icons.watch, gulp.parallel('sprite'));
});


gulp.task('build', gulp.series(
	'clean',
	'templates',
	'fonts',
	'styles',
	'libsCSS',
	'scripts',
	'libsJS',
	'sprite',
	'imgBuild'
));

gulp.task('dev', gulp.series(
	'clean',
	'templates',
	'fonts',
	'styles',
	'libsCSS',
	'scripts',
	'libsJS',
	'sprite',
	'imgDev',
	'server'
));