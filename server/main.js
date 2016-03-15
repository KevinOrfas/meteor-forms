Meteor.startup(function () {
  // code to run on server at startup
});
Meteor.publish("tags", function() {
  if (this.userId) {
    return Tags.find();
  }
});
