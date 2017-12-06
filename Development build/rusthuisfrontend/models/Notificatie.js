let mongoose = require('mongoose');

var NotificatieSchema = mongoose.Schema({
    date: Date,
    patientid: String,
    message: String
});

mongoose.model('Notificatie', NotificatieSchema);