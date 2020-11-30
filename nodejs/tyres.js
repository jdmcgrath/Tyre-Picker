const mongoose = require('mongoose');

const tyreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Tyre', tyreSchema);
