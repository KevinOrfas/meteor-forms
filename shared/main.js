Meteor.methods({
  addTag:function(presentationName,product,parentId,presentationId) {
    // Make sure the user is logged in before inserting a tag
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log('Fuck all');
    Tags.insert({
      presentationName: presentationName,
      product: product,
      parentId: parentId,
      presentationId: presentationId
      // createdAt: new Date(),
      // owner: Meteor.userId(),
      // username: Meteor.user().username
    });
  }

});
