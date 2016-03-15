///////////
/// Subscriptions
///////////

Meteor.subscribe("tags");

///////////
/// Helpers
///////////

Template.myTags.helpers({
  tags: function () {
    return Tags.find({});
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
