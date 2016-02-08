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