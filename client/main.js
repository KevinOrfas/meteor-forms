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

Template.navbar.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

///////////
/// Events
///////////

Template.navbar.events({
  'click button': function () {
    // increment the counter when button is clicked
  }
});
