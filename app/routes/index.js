import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(anything) {
      anything.destroyRecord();
      this.transitionTo('index');
    }
  }
});

// destroyRental after actions: have to match with destroyRental on the right handside of the equals in index.hbs
