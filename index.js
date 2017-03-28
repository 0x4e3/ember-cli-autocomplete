/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-autocomplete',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/devbridge-autocomplete/dist/jquery.autocomplete.js');
  }
};
