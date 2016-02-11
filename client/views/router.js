Router.route('/', function(){
	this.layout('layout'),

	this.render('view_employees')
})

Router.route('/expenses', function(){
	this.layout('layout'),

	this.render('expenses')
})

Router.route('/appraisal', function(){
	this.layout('layout'),

	this.render('appraisal')
})

Router.route('/interview-request', function(){
	this.layout('layout'),

	this.render('interview-request')
})

Router.route('/employee-tags', function(){
	this.layout('layout'),

	this.render('employee-tags')
})

Router.route('/departments', function(){
	this.layout('layout'),

	this.render('departments')
})

Router.route('/appraisal-plans', function(){
	this.layout('layout'),

	this.render('appraisal-plans')
})

Router.route('/expense-categories', function(){
	this.layout('layout'),

	this.render('expense-categories')
})

Router.route('/view-employees', function(){
	this.layout('layout'),

	this.render('view_employees')
})

Router.route('/view-positions', function(){
	this.layout('layout'),

	this.render('view_job_positions')
})

Router.route('/view-applications', function(){
	this.layout('layout'),

	this.render('view_applications')
})

Router.route('/view-stages', function(){
	this.layout('layout'),

	this.render('stages')
})


Router.route('/view-degrees', function(){
	this.layout('layout'),

	this.render('degrees')
})

Router.route('/view-source-applicants', function(){
	this.layout('layout'),

	this.render('source')
})
