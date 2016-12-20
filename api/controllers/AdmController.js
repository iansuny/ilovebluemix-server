/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	validateLogin: function(req, res) {

		var config = require('../../config.js')

		var account = req.param('account');
		var password = req.param('password');
		if(account == config.admin.account && password == config.admin.password) {
			req.session.isAdmin = true;
			return res.json({ result: 'ok' });
		}else{
			return res.json({ error: 'error' }, 400);
		}
	}
};

