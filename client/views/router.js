Router.route('/view-employees-kanban', function(){
	this.layout('layout'),

	this.render('view_employees_kanban')
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