/**
 * Created by patrykzabielski on 25.11.14.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});