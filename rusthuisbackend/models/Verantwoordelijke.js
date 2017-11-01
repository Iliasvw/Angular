let mongoose = require('mongoose');

var VerantwoordelijkeSchema = mongoose.Schema({
    voornaam : String,
    naam : String,
    kamer : Number,
    verdieping : Number,
});

mongoose.model('Verantwoordelijke', PatientScherma);