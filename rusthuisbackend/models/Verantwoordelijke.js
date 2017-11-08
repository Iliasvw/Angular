let mongoose = require('mongoose');

var VerantwoordelijkeSchema = mongoose.Schema({
    voornaam : String,
    naam : String,
    email: String,
    patienten: Patient[]
});

mongoose.model('Verantwoordelijke', PatientScherma);