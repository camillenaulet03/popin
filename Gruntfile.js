 module.exports = function(grunt) {
 	grunt.initConfig({
		
		ncsslint:
    {
        name:
        {
            options:
            {
                config: '.ncsslintrc',
                html: null,
                path: null,
                url: ["./src/css/*.css"],
                namespace: null,
                logLevel: 'warn',
                thresholdError: 0,
                thresholdWarn: 0,
                haltOnError: false,
                haltOnWarn: false
            }
        }
    },


    jshint: {
      options: {
        force: true
      },
      all: ["./src/script/*.js"]
    },
	
	browserify: {
      dist: {
          files: [{
            expand: true,
            src: ['./src/script/*.js'],
            dest: "./src/js_pur/",
          }],
          options: {
              transform: [['babelify', { presets: "es2015" }]],
              browserifyOptions: {
                  debug: true
              }
          }
      }
  },
		
		sass: {                              
        dist: {                            
          options: {                       
            style: 'expanded'
          },
          files: [{
            expand: true,
            src: ['./src/scss/*.scss'],
            dest: '',
            ext: '.css'
          }],
        }
      },
	  
	  concatCss: {
        options: {
        separator: ' ',
        },
            dist: {
              src: ['src/css/*.css',  'src/scss/stylesheet3.css'],
              dest:  'src/css/main.css',
              }
        },
		
		cssmin: {
                target: {
                  files: {
                    './src/css/main.css':['./src/css/main.css']
                  }
                }
              },


        concatJs: {
          options: {
          separator: ';',
          },
          
          dist: {
              src: ['src/script/*.js'],
              dest:  'src/script/script.js',
              }
          },
		  
         uglify: {
         my_target: {
             files:  {
             	'src/script/script.js': ['src/script/script.js']
		         }
		     }
		 }, 
		 
		 zip: {
                'archive.zip': ['./src/css/main.css','./src/script/script.js','./src/image','./src/index.html']
              }
 });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.renameTask('concat', 'concatCss');
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.renameTask('concat', 'concatJs');
	
	grunt.loadNpmTasks('grunt-ncss-linter');
 	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-browserify");
	
 	grunt.registerTask('default', ['ncsslint','jshint', 'sass', 'browserify', 'concatJs', 'concatCss' ,'uglify', 'cssmin','zip']);
 }