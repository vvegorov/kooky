import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cryptidType: DS.attr('string'),
  profileImg: DS.attr('string'),
  // fileImg: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  cryptidName: Ember.computed('name', 'cryptidType', function() {
    return this.get('name') + ' ' + this.get('cryptidType');
  })

});
