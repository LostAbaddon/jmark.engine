module.exports = function (grunt) {
    var name_with_version = '<%= pkg.name %>-v<%= pkg.version%>';
    var name_without_version = '<%= pkg.name %>';
    var source_files = ['environment.js', 'lib/*.js', 'lib/*/*.js', 'index.js'];

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint: {
            source: ['lib/*.js','lib/*/*.js'],
            output: ['build/*.js']
        },
        uglify: {
            target: {
                src: source_files,
                dest: 'build/' + name_with_version + '.min.js'
            }
        },
        concat: {
            target: {
                src: source_files,
                dest: 'build/' + name_with_version + '.js'
            }
        },
        copy: {
            release: {
                src: 'build/' + name_with_version + '.min.js',
                dest: name_without_version + '.js'
            }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // register at least this one task
    grunt.registerTask('default', ['jshint:source', 'uglify', 'concat', 'copy']);
};