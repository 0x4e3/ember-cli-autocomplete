import Ember from 'ember';

export default Ember.Controller.extend({
  countries: [
    { value: 'Andorra', data: 'AD' },
    { value: 'Russian Federation', data: 'RU' },
    { value: 'United States', data: 'USA' },
    { value: 'Zimbabwe', data: 'ZZ' }
  ],
  apiUrl: 'https://api.github.com/search/repositories',
  actions: {
    onSelect(suggestion) {
      console.log(this);
      console.log(suggestion);
    },
    transformResponse(response) {
      return {
        suggestions: Ember.$.map(response.items, function(item) {
          return {value: item.full_name, data: item.id};
        })
      };
    }
  }
});
