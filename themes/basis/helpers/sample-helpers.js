
/**
Sample helper definitions for HackMyResume's "basis" example theme.
@license MIT. See LICENSE.md for details.
@module themes/basis/helpers/sample-helpers
*/

(function() {

  // Block helper function definitions.
  var SampleHelpers = module.exports = {

    // A sample helper that returns the supplied value.
    helperA: function(someVal, options) {
      return someVal;
    },

    // Another sample helper that returns the supplied value.
    helperB: function(title, options) {
      return title;
    },

    // A sample block helper
    helperC: function(lhs, rhs, options) {
      if (lhs || rhs) {
        return options.fn(this);
      }
    }

  };

}).call(this);
