// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Apartments.find().count() === 0) {

    // create sample apartment
    var sampleApartments = [
      {
        address: {
          street: '123 East 456 West',
          city: 'provo',
          state: 'ut',
          zipcode: 84601
        },
        school: 'byu',
        price: 280,
        photos: 'someUrl'
      },
      {
        address: {
          street: '234 East 567 West',
          city: 'orem',
          state: 'ut',
          zipcode: 84058
        },
        school: 'uvu',
        price: 280,
        photos: 'someUrl'
      },
    ];

    // loop over each sample poll and insert into database
    _.each(sampleApartments, function(apartment) {
      Apartments.insert(apartment);
    });

  }

});
