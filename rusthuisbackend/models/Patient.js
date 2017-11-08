let mongoose = require('mongoose');

var PatientScherma = mongoose.Schema({
    voornaam : String,
    naam : String,
    kamer : Number,
    verdieping : Number,
    //verantwoordelijke: Verantwoordelijke,
    specialeBehoeften: String,
    voeding: String,
    medisch: String,
    geboortedatum: Date
    //dokter: Dokter,
    //verpleegkundige: Verpleegkundige
}/*, { _id: false }*/);

mongoose.model('Patient', PatientScherma);