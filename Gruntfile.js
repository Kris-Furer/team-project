module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/custom.css': 'scss/custom.scss',       // 'destination': 'source'
      }
    }
  },
    watch: {
    scripts: {
      files: ['js/custom.js', 'sass/custom.scss', 'index.html', 'Gruntfile.js'],
      tasks: ['jshint', 'sass', 'uglify'],
      options: {
        spawn: false,
      },
    },
  },
    jshint: {
      all: ['Gruntfile.js', 'js/custom.js']
  },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
  },
    strict: {
      options: {
        import: 2
      },
      src: ['css/custom.css']
    },
    lax: {
      options: {
        import: false
      },
      src: ['css/custom.css']
    }
  },
    htmllint: {
    your_target: {
      options: {
        force: false,
        plugins: ['htmllint-plugin-name'],
        /* htmllint options go here */
      },
      src: [
        'index.html'
      ]
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify','sass','watch', 'jshint', 'csslint', 'htmllint']);

};
