/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	indexIO: function(req, res) {
		return res.view('blank', {
			layout: 'index'
		})
	},

	actionIO: function(req, res) {
		action = req.param('action');
		switch(action) {
			case 'index':
				return res.view('blank', {
					layout: 'index',
				})
			case 'admin':
				return res.view('blank', {
					layout: 'admin/login',
				})
			default:
				return res.redirect('/');
		}
	},

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
				return res.redirect('/admin/login');
		}
	},
	
	activityIO: function(req, res) {
		id = req.param('id');
		if (id == "all"){

			return res.view('blank', {
				layout: 'activity/index',
			})

		} else {

			return res.view('blank', {
				layout: 'activity/detail',
			})
		}
	},

};

