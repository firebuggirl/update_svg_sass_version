var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('default', function () {
    return gulp.src('svgs/*')
        .pipe(svgmin({

            plugins: [{
                removeDoctype: true
            }, {
                removeComments: true
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2
                }
            }, {
                convertColors: {
                    names2hex: false,
                    rgb2hex: false
                },
                js2svg: {
                     pretty: true
                 }
            }]
        }))
        .pipe(gulp.dest('./out'));
});
