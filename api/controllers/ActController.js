/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createActibvity: function(req, res) {

		if(!req.session.isAdmin || typeof(req.session.isAdmin) == 'undefined'){
			return res.view('blank', {
				layout: 'admin/login'
			})
		}

		var name = req.param('name');
		var date = req.param('date');
		var place = req.param('place');
		var detail = req.param('detail');

		Act.create({
			name: name,
			date: date,
			place: place,
			detail: detail
		})
		.exec(function(err, act) {
			if(err) return res.negotiate(err);
			return res.json({ result: 'ok' });
		})
	}
	
};

