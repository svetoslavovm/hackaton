var dest = 'compiled';
var src = 'static';

module.exports = {
  dest: dest,
  html: {
    src: src + '*.html',
    dest: dest,
    watchPath: [
      src + '/**/*.html',
    ],
  },
  server: {
    src: 'compiled',
  },
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src],
    },
    files: [
      dest + '/**',

      // Exclude Map files
      '!' + dest + '/**.map',
    ],
  },
  sass: {
    dest: dest + '/css',
    src: src + '/css/global.scss',
    watchPath: [
      src + '/css/**/*.scss',
      src + '/css/**/*.css',
    ],
  },
  images: {
    dest: dest + '/img',
    src: src + '/img/**',
    watchPath: src + '/img/**/*',
  },
  eslint: {
    src: [
      'gulpfile.js',
      'gulp/**/*.js',
      src + '/js/**/*.js',
      '!' + src + '/js/plugins/**',
    ],
    watchPath: [
      'gulpfile.js',
      'gulp/**/*.js',
      src + '/js/**/*.js',
      '!' + src + '/js/plugins/**',
      'test/**/*.js',
    ],
  },
  browserify: {
    debug: true, //Enable source maps (non-minified files)
    extensions: ['.coffee', '.hbs'], // Additional file extentions to make optional

    cloudinary: {
      src: 'static/js/plugins/cloudinary/jquery.cloudinary.js',
      dest: './' + dest + '/js',
    },

    // A separate bundle will be generated for each bundle config in this array
    bundleConfigs: [{
      entries:  './' + src + '/js/global.js', //wont work unless path starts with ./
      dest: './' + dest + '/js', //wont work unless path starts with ./
      outputName: 'global.js',
    },
    {
      entries:  './' + src + '/js/homepage.js', //wont work unless path starts with ./
      dest: './' + dest + '/js', //wont work unless path starts with ./
      outputName: 'homepage.js',
    },
    {
      entries: [//wont work unless path starts with ./
        './' + src + '/js/picturefill/picturefill.js',
        './' + src + '/js/plugins/video-js/videoShiv.js',
      ],
      dest: './' + dest + '/js', //wont work unless path starts with ./
      outputName: 'header.js',
    },
    ],
    watchPath: [
      src + '/js/global.js',
      src + '/js/homepage.js',
      src + '/modules/**/*.js',
      src + '/js/common/**/*.js',
      src + '/js/plugins/**/*.js',
    ],
  },
};
