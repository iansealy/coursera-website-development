Meteor.startup(function() {
    if (!Websites.findOne()) {
        Websites.insert({
    		url: "http://www.example.com/",
    		title: "Example",
    		description: "Just an example.",
            upVotes: 0,
            downVotes: 0,
    		createdOn: new Date()
    	});
    }
});
