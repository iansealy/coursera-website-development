Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
});
Router.route('/about', function () {
    this.render('about');
});
Router.route('/credits', function () {
    this.render('credits');
});
