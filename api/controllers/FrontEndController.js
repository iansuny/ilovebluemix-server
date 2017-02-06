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

	surveyIO: function(req, res) {
		id = req.param('id');

		Sur.findOne({
			id: id
		})
		.exec(function(err, survey) {
			if(typeof(survey) == 'undefined') return res.redirect('/');


		})
	}

};

