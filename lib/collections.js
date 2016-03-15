Tags = new Mongo.Collection("tags");

Tags.deny({
  insert: function (userId, document) {
    return true;
  }
});

Tags.allow({
  insert: function(userId, document) {
    // console.log(userId);
    return false;
  }
});

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


Meteor.users.allow({
 insert: function(userId, document){
   return false;
  }
});

Meteor.users.deny({
   insert: function(userId, document){
     return true;
   }
});
