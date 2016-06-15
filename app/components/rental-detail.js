import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(anyParameter) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', anyParameter);
      }
    }
  },
});
