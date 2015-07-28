/**
 * grunt-diffalert
 * https://github.com/pape-io/grunt-diffalert
 *
 * Copyright (c) 2015 Sebastian Pape
 * Licensed under the MIT license.
 */

'use strict';
var diff    = require( 'diff' ),
    fs      = require( 'fs' );

module.exports = function ( grunt ) {
    grunt.registerMultiTask( 'diffalert', 'Alert in case of differences in files', function () {

        var done                = this.async(),
            options             = this.options({
                alertOn: ['removed', 'added']
            });

        var isDiffWatched = function ( diff ) {
            return  diff.removed && options.alertOn.indexOf('removed') > -1 || 
                    diff.added && options.alertOn.indexOf('added') > -1;
        };

        this.files.forEach(function ( file ) {
            file.src.forEach(function ( diffFile ) {
                var fileSrc, 
                    diffFileSrc, 
                    result,
                    errorText,
                    diffs = [];

                fileSrc = fs.readFileSync(file.dest).toString();
                diffFileSrc = fs.readFileSync(diffFile).toString();

                result = diff.diffCss(fileSrc, diffFileSrc);
                result.forEach(function ( diff ) {
                    if(isDiffWatched(diff)) {
                        diffs.push(diff);
                    }
                });
                
                if(diffs.length > 0) {
                    errorText = 'Files are different: ' + file.dest + ' & ' + diffFile + '\n';
                    result.forEach(function ( diff ) {
                        if(isDiffWatched(diff)) {
                            if(diff.removed){
                                errorText += '\n\n########### The following was removed: ###########\n\n';
                            } else if(diff.added) {
                                errorText += '\n\n########### The following was added: ###########\n\n';
                            }
                            errorText += diff.value + '\n';
                        }
                    });
                    throw new Error(errorText);
                }
            });
            done();
        });

    });

};