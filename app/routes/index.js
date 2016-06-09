import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    save3(paramsqqq) {
      var newRentalsss = this.store.createRecord('rental', paramsqqq);
      newRentalsss.save();
      this.transitionTo('index');
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(anything) {
      anything.destroyRecord();
      this.transitionTo('index');
    }
  }
});

// destroyRental after actions: have to match with destroyRental on the right handside of the equals in index.hbs
