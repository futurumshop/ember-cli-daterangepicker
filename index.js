/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-daterangepicker',

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.js');
    this.app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.css');
  }
};
