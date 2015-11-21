if (Meteor.isClient) {
  Template.hello.helpers({
    now: function () {
      return new Date();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
