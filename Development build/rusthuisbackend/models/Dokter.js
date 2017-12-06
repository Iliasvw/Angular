let mongoose = require('mongoose');

var DokterSchema = mongoose.Schema({
    naam: String,
    voornaam: String,
    telefoon: String,
    info: String
});

//DokterSchema.set('versionKey', false);

mongoose.model('Dokter', DokterSchema);