fis-preprocessor-uri-sherry
==

> 补充资源定位函数 __uri

主要用途：一般img的src，a表情的href，如果匹配到对应的文件，发布后fis会将对应文件的路径转为正确的uri。

可是对于特殊的情况（如data-uri，data-src等属性）fis不会转换。

而此插件，是用于将data-src、data-uri等非标准定位转换为标准定位。