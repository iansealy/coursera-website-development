// Routing
Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

// Home
Router.route('/', function() {
    this.render('home', {
        to: "main"
    });
});

// Site details
Router.route('/site/:_id', function() {
    this.render('site_detail', {
        to: "main",
        data: function() {
            return Websites.findOne({_id: this.params._id});
        }
    });
});

// Get all websites
Template.website_list.helpers({
	websites: function() {
		return Websites.find({}, {sort: {upVotes: -1, downVotes: 1}});
	}
});

// Get all comments
Template.comment_list.helpers({
	comments: function() {
		return Comments.find({site: this._id}, {sort: {createdOn: 1}});
	}
});

// Format dates
Template.registerHelper('timeAgo', function(date) {
    return moment(date).fromNow();
});

// Website form events
Template.website_form.events({
    "click .js-toggle-website-form": function(event) {
        $("#website_form").toggle('slow');
    },
    "submit .js-save-website-form": function(event) {
        var url = event.target.url.value;
        var title = event.target.title.value;
        var description = event.target.description.value;
        if (Meteor.user()) {
            Websites.insert({
                url: url,
                title: title,
                description: description,
                upVotes: 0,
                downVotes: 0,
                createdOn: new Date()
            });
        }
        $("#website_form").toggle('slow');
        return false;
    }
});

// Website item events
Template.website_item.events({
    "click .js-upvote": function(event) {
        var website_id = this._id;
        Websites.update({_id: website_id}, {$inc: {upVotes: 1}});
        return false;
    },
    "click .js-downvote": function(event) {
        var website_id = this._id;
        Websites.update({_id: website_id}, {$inc: {downVotes: 1}});
        return false;
    }
})

// Site details events
Template.site_detail.events({
    "submit .js-add-comment-form": function(event) {
        var comment = event.target.comment.value;
        var site = this._id;
        Comments.insert({
            comment: comment,
            site: site,
            createdOn: new Date()
        });
        $(".js-add-comment-form input").val('');
        return false;
    }
});
