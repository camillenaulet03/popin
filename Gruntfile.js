 module.exports = function(grunt) {
 	grunt.initConfig({
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
              src: ['src/css/*.css',  'scr/scss/stylessheet3.css'],
              dest:  'src/css/main.css',
              }
        },
   

        concatJs: {
          options: {
          separator: ';',
          },
          
          dist: {
              src: ['src/script/script1.js', 'src/script/script2.js'],
              dest:  'src/script/script.js',
              }
          },
		  
         uglify: {
         my_target: {
             files:  {
             	'src/script/script.js': ['src/script/script.js']
		         }
		     }
		 }
 });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.renameTask('concat', 'concatCss');
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.renameTask('concat', 'concatJs');
	
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.registerTask('default', ['sass', 'concatJs', 'concatCss' ,'uglify']);
 }