/////////////
///// Collections
/////////////
Tags = new Mongo.Collection("tags");
Keys = new Mongo.Collection("keys");

/////////////
///// Schemas
/////////////
Tags.attachSchema(new SimpleSchema({
  presentationName: {
    type: String
  },
  product: {
    type: String
  },
  parentId: {
    type: String,
    unique: true,
    index: 1
  },
  presentationId: {
    label: 'Presentation ID',
    type: String
  }
}));

Keys.attachSchema(new SimpleSchema({
  keyMessage: {
    type: String,
    label: 'Key Message',
    unique: true,
    index: 1
  },
  description: {
    label: 'Description',
    type: String
  },
  order: {
    label: 'Order',
    type: Number
  },
  slideName: {
    label: 'CLM Presentation Slide Name',
    type: String
  }
}));

/////////////
///// Allow / Deny
/////////////

// Tags.deny({
//   insert: function (userId, document) {
//     return true;
//   }
// });

Tags.allow({
  insert: function(userId, document) {
    // console.log(userId);
    return true;
  }
});

// Keys.deny({
//   insert: function (userId, document) {
//     return true;
//   }
// });

Keys.allow({
  insert: function(userId, document) {
    // console.log(userId);
    return true;
  }
});

// Meteor.users.deny({
//    insert: function(userId, document){
//      return true;
//    }
// });

Meteor.users.allow({
 insert: function(userId, document){
   return true;
  }
});
