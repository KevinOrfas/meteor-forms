Meteor.startup(function () {
  // code to run on server at startup
});
Meteor.publish("tags", function() {
    return Tags.find();
});
