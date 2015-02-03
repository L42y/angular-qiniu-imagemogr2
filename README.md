# [angular](http://angularjs.org)-[qiniu](http://www.qiniu.com)-[imagemogr2](http://developer.qiniu.com/docs/v6/api/reference/fop/image/imagemogr2.html)

AngularJS component for preprocessing image URL from qiniu.com(七牛云存储)

## Installation

1. `bower install --save L42y/angular-qiniu-imagemogr2`

2. including script file provided by dependency [angular-qiniu-image](https://github.com/L42y/angular-qiniu-image) into your application

3. including `angular-qiniu-imagemogr2.js` script file provided by this component into your application

4. adding `l42y.qiniu.imagemogr2` as a module dependency to your application

## Usage

```html
<img qiniu-image="{{ object.image.url }}"
    auto-orient
    strip
    thumbnail="444x333"
    gravity="center"
    crop="222x"
    rotate="180"
    format="webp"
    blur="25x25"
    interlace="1"
    qiniu-imagemogr2>
```

## License

[WTFPL](http://wtfpl.org)
