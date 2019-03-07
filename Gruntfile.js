 module.exports = function(grunt) {
 	grunt.initConfig({
 		concat:  {
             options: {
            	 separator: ';',
             },
             dist: {
                 src:  ['script/script1.js', 'script/script2.js'],
                 dest:  'script/scripts.js',
             },
         },
         uglify: {
         my_target: {
             files:  {
             	'script/scripts.min.js': ['script/scripts.js']
		         }
		     }
		 },                            // Task
		    /*sass: {
		options: {
			implementation: sass,
			sourceMap: true
		},
		dist: {
			files: {
				'main.css': 'main.scss'
			}
		}
	}*/
		  
 	});
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.registerTask('default', ['concat','uglify']);
 }