/**
 * BackEndController
 *
 * @description :: Server-side logic for managing Backends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	adminIO: function(req, res) {
		action = req.param('action');
		if((!req.session.isAdmin || typeof(req.session.isAdmin) == 'undefined') && action!='login'){
			return res.redirect('admin/login')
		}
		switch(action) {
			case 'login':
				return res.view('blank', {
					layout: 'admin/login',
				})
			case 'index':
				return res.view('blank', {
					layout: 'admin/index',
				})
			case 'logout':
				req.session.isAdmin = false;
				return res.redirect('admin/login')
			default:
				return res.redirect('/admin/index');
		}
	},

	adminSurveyIO: function(req, res) {
		action = req.param('action');
		if((!req.session.isAdmin || typeof(req.session.isAdmin) == 'undefined') && action!='login'){
			return res.redirect('admin/login')
		}
		switch(action) {
			case 'index':
				return res.view('blank', {
					layout: 'admin/survey',
				})
			default:
				return res.redirect('/admin/index');
		}
	},


	
};

