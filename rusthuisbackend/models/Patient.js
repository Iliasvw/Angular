let mongoose = require('mongoose');
var PatientSchema = mongoose.Schema({
    voornaam : String,
    naam : String,
    kamer : Number,
    verdieping : Number,
    verantwoordelijke: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Verantwoordelijke'
    },
    specialeBehoeften: String,
    voeding: String,
    medisch: String,
    geboortedatum: Date,
    dokter: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Dokter'
    },
    chat: [{
        /*type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Message'*/
        messageId: Number,
        sender: String,
        content: String
    }],
    verpleegkundige: String
}/*, { _id: false }*/);

//PatientSchema.set('versionKey', false);

mongoose.model('Patient', PatientSchema);