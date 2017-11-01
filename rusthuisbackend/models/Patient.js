let mongoose = require('mongoose');

var PatientScherma = mongoose.Schema({
    voornaam : String,
    naam : String,
    kamer : Number,
    verdieping : Number,
});

mongoose.model('Patient', PatientScherma);