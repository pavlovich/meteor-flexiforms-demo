/**
 * Created by pavlovich on 10/7/14.
 */

Meteor.startup(function(){
    if(Meteor.isServer) {
        FastRender.route('*', function (params) {
            this.subscribe('state');
        });
    }else{
        Meteor.subscribe('person');
        Meteor.subscribe('state');
    }
});
