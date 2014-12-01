/**
 * Created by patrykzabielski on 27.11.14.
 */
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return alert(error.reason);
            Router.go('postPage', {_id: result._id});
        });

        // show this result but route anyway
        if (result.postExists)
            alert('This link has already been posted');

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});