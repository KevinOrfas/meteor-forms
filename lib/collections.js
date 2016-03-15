Tags = new Mongo.Collection("tags");

Tags.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
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
