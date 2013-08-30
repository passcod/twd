module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    clean:
      src: 'bin/*'
    nodewebkit:
      options:
        version: '0.7.2'
        webkit_src: './bin'
        linux32: true
        linux64: true
        mac: true
        win: true
      src: [
        'README.md'
        'LICENSE'
        'icon.png'
        'index.html'
        'package.json'
      ]
    shell:
      pre:
        command: 'mkdir -p bin'

  [
    'clean'
    '-node-webkit-builder'
    '-shell'
  ].forEach (t) ->
    t = '-contrib-' + t unless /^-/.test(t)
    grunt.loadNpmTasks 'grunt' + t

  grunt.registerTask 'dist', [
    'clean'
    'shell:pre'
    'nodewebkit'
  ]

  grunt.registerTask 'default', 'dist'
