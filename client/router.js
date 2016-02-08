Router.route('/', function(){
	this.render('homepage');
})

Router.route('/results', function(){
	this.render('search_results');
})