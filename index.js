'use strict';

var path = require('path');

module.exports = function(content, file, conf) {
    //替换a标签中的资源
    var tagReg = /('|")(.+?)\?__uri\1/gi;

    if (file.isJsLike || file.isCssLike || file.isHtmlLike) {

        content = content.replace(tagReg, function(all, quote, uri){

            uri = uri.replace(/['"\s]/g,"");
            uri = '"<<<uri:'+ uri +'>>>"';

            return uri;
        });
        // console.log(content);
    }    

    return content;
};