Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
});
Router.route('/gdp', function () {
    this.render('gdp');
});
Router.route('/income', function () {
    this.render('income');
});
Router.route('/reserves', function () {
    this.render('reserves');
});
