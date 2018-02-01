/**
Mount individual themes onto the module object for convenience.
@module index.js
@license MIT. See LICENSE.md for details.
*/

(function(){

  module.exports = {
    themes: {
      awesome: require('./themes/awesome/theme.json'),
      basis: require('./themes/basis/theme.json'),
      compact: require('./themes/compact/theme.json'),
      modern: require('./themes/modern/theme.json'),
      positive: require('./themes/positive/theme.json')
    }
  };

}());
