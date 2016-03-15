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


// Meteor.call('addTag',text);

///////////
/// Events
///////////

Template.insertTagForm.events({
  'insert': function(){
    Meteor.call('addTag');
  }


});
