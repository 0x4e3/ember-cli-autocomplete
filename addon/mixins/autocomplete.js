import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

/**
 * A mixin for attaching jquery-autocomplete to the component's element.
 * @see https://www.devbridge.com/sourcery/components/jquery-autocomplete/
 */

export default Ember.Mixin.create({
  /**
   * Initializes autocomplete with provided options.
   * @private
   */
  _initializeAutocomplete() {
    Ember.assert('jquery-autocomplete.js must be loaded', typeof Ember.$().autocomplete === 'function');

    let options = this._options();

    const dataSourceConfigured = Ember.isPresent(options.get('serviceUrl')) || Ember.isPresent(options.get('lookup'));

    assign(options, this.get('autocompleteOptions') || {});
    // console.log(options);
    // console.log(JSON.parse(JSON.stringify(options)));

    Ember.assert('serviceUrl or lookup attributes must be provided', dataSourceConfigured === true);
    this.$().autocomplete(options);
  },

  _options() {
    let options = Ember.Object.create({
      // AJAX global settings
      type: this.get('requestType') || 'GET',
      dataType: this.get('dataType') || 'json',
      paramName: this.get('paramName') || 'q',
      deferRequestBy: this.get('deferRequestBy') || 0,
      ajaxSettings: this.get('ajaxSettings') || {},

      // Configuration settings
      onSearchStart: this.get('onSearchStart') || function() {},
      onSearchComplete: this.get('onSearchComplete') || function() {},
      onSearchError: this.get('onSearchError') || function() {},
      transformResult: this.get('transformResult') || function() {},
      onHide: this.get('onHide') || function() {},
      onSelect: this.get('onSelect') || function() {},
      minChars: this.get('minChars') || 1,
      triggerSelectOnValidInput: this.get('triggerSelectOnValidInput') || false,
      preventBadQueries: this.get('preventBadQueries') || true,
      autoSelectFirst: this.get('autoSelectFirst') || false
    });
    if (this.get('params')) {
      options.set('params', this.get('params'));
    }
    if (this.get('lookupLimit')) {
      options.set('lookupLimit', this.get('lookupLimit'));
    }
    // Data source settings
    if (this.get('serviceUrl')) {
      options.set('serviceUrl', this.get('serviceUrl'));
    }
    if (this.get('lookup')) {
      options.set('lookup', this.get('lookup'));
    }
    return options;
  },

  didInsertElement() {
    this._super(...arguments);
    this._initializeAutocomplete();
    // TODO: Add additional initialization actions here.
  },

  willDestroyElement() {
    this._super(...arguments);
    // TODO: Add all required removel actions here.
  }

});
