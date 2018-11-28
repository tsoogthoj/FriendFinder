let friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {

		let clientInput = req.body;
		console.log(clientInput)
		let userResponses = clientInput.scores;
		// Compute best friend match
		let matchName = '';
		let matchImage = '';
		let totalDifference = 10000;

		for (let i = 0; i < friends.length; i++) {

			// Compute differenes for each question
			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}


			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};