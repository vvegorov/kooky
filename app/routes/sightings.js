import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return [{
    //     id: 1,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   },
    //   {
    //     id: 2,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   },
    //   {
    //     id: 3,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   },
    //   {
    //     id: 4,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   },
    //   {
    //     id: 5,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   },
    //   {
    //     id: 6,
    //     location: 'Asilomar',
    //     sightedAt: new Date('2016-03-07')
    //   }
    // ];
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });
    let record2 = this.store.createRecord('sighting', {
      location: 'Calloway',
      sightedAt: new Date('2016-03-14')
    });
    let record3 = this.store.createRecord('sighting', {
      location: '',
      sightedAt: new Date('2016-03-21')
    });
    record1.set('location', 'Paris, France');
    // console.log("Record 1 location: " + record1.get('location') );
    return [record1, record2, record3];
  }

});
