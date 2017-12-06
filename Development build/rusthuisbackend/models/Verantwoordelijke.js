let mongoose = require('mongoose');

var VerantwoordelijkeSchema = mongoose.Schema({
    voornaam : String,
    naam : String,
    email: String,
    patienten: [{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Patient'
    }],
    telefoon: String
});
mongoose.model('Verantwoordelijke', VerantwoordelijkeSchema);