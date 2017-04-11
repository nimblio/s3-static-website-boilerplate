var gulp = require('gulp');
var fs = require('fs');
var awsPublish = require('gulp-awspublish');
var aws = JSON.parse(fs.readFileSync('./aws-credentials.json'));

gulp.task('publish-production', function() {
  aws.params = {Bucket: 'mydomain.com'};
  var publisher = awsPublish.create(aws);

  return gulp.src('./public/**')
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awsPublish.reporter());
})

gulp.task('publish-staging', function() {
  aws.params = {Bucket: 's.mydomain.com'};
  var publisher = awsPublish.create(aws);

  return gulp.src('./public/**')
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awsPublish.reporter());
})
