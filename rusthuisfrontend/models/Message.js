let mongoose = require('mongoose');
//var autoIncrement = require('mongoose-auto-increment');
var MessageSchema = mongoose.Schema({
    messageId: {type: Number, required: true},
    sender: String,
    content: String
});

//MessageSchema.plugin(autoIncrement.plugin, { model: 'Message', field: 'MessageId', startAt: 1, incrementBy: 1 });
mongoose.model('Message', MessageSchema);