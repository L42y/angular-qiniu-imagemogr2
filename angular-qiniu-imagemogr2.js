angular.module('l42y.qiniu.imagemogr2', [
  'l42y.qiniu.image'
]).directive('qiniuImagemogr2', function (
) {
  var identifier = 'imageMogr2';
  var ATTRS = ['/auto-orient', '/strip',
               'thumbnail', 'gravity', 'crop',
               'rotate', 'format', 'blur', 'interlace'];

  return {
    require: '^qiniuImage',
    restrict: 'A',
    link: function ($scope, $element, $attrs, qiniu) {
      var fop = identifier;
      ATTRS.forEach(function (attr) {
        var val = $attrs[attr];
        if (attr.indexOf('/') !== -1) {
          if (angular.isDefined(val)) {
            fop += attr;
          }
        } else {
          if (val) fop += '/' + attr + '/' + val;
        }
      });

      qiniu.fops[identifier] = fop;
    }
  };
});
