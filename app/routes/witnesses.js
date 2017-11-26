import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // let witnessRecord = this.store.createRecord('witness', {
    //   fName: "Todd",
    //   lName: "Gandee",
    //   email: "gake@bignerdranch.com"
    // });
    // let witnessRecord_1 = this.store.createRecord('witness', {
    //   fName: "Modd",
    //   lName: "Landee",
    //   email: "hake@bignerdranch.com"
    // });
    // let witnessRecord_2 = this.store.createRecord('witness', {
    //   fName: "Kodd",
    //   lName: "Pandee",
    //   email: "fake@bignerdranch.com"
    // });
    // return [witnessRecord,witnessRecord_1,witnessRecord_2];
    return this.store.findAll('witness');
  }
});
