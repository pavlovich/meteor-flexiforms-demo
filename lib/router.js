/**
 * Created by pavlovich on 2/10/14.
 */

Router.configure({
    layoutTemplate: '_layout'
});

Router.onBeforeAction(
    function() {
            this.redirect('/');
    }, {except: ['home']}
);

Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'person',
        layoutTemplate: '_layout'
    });
    this.route('notFound', { path: '*' });
});
