Router.route('/', function(){
	this.render('homepage');
})

Router.route('/results', function(){
	this.render('search_results');
})

Router.route('/results_list', function(){
	this.render('search_results_list');
})

Router.route('/profile', function(){
	this.render('profile');
})

Router.route('/appointment', function(){
	this.render('create_appointment');
})

Router.route('/login', function(){
	this.render('login');
})

Router.route('/signup', function(){
	this.render('signup');
})

Router.route('/dashboard', function(){
	this.render('dashboard');
})