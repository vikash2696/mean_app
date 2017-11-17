
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    city: String
});

module.exports = mongoose.model('User',UserSchema);