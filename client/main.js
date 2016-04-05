///////////
/// Subscriptions
///////////

Meteor.subscribe("tags");
Meteor.subscribe("keys");

///////////
/// Helpers
///////////

Template.myTags.helpers({
  tags: function () {
    console.table(Tags.find().fetch());
    return Tags.find({});
  }
});

Template.myKeys.helpers({
  keys: function () {
    console.table(Keys.find().fetch());
    return Keys.find({});
  }
});

///////////
/// Events
///////////

Template.insertTagForm.events({
  insert: function() {
    console.log('insert is going on');
    Meteor.call('addTag');
  },
  update: function() {

  }
});

Template.insertKeyMessages.events({
  insert: function() {
    console.log('insert is going on');
    Meteor.call('addKey');
  },
  update: function() {

  }
});
