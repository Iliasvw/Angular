var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Patient = mongoose.model('Patient');
let Dokter = mongoose.model('Dokter');
let Verantwoordelijke = mongoose.model('Verantwoordelijke');
let Message = mongoose.model('Message');
let Notificatie = mongoose.model('Notificatie');
let jwt = require('express-jwt');
let auth = jwt({ secret: process.env.RUSTHUIS_BACKEND_SECRET, userProperty: 'payload' });
module.exports = router;

router.get('/rusthuis/bewoners/', auth, function (req, res, next) {
  Patient.find(function (err, bewoners) {
    if (err) return next(err);
    res.json(bewoners);
  });
});

router.post('/rusthuis/addbewoner/', auth, function (req, res, next) {
  let patient = new Patient(req.body);
  patient.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.param('patient', function (req, res, next, id) {
  let query = Patient.findById(id).populate('verantwoordelijke')
    .populate('dokter')
    .populate('chat');
  query.exec(function (err, patient) {
    if (err) { return next(err); }
    if (!patient) { return next(new Error('not found ' + id)); }
    req.patient = patient;
    return next();
  })
});

/*router.get('/rusthuis/bewoner/:id', function (req, res, next) {
  Patient.findById(req.params.id, function (err, patient) {
    if (err) return next(err);
    if (!patient)
      return next(new Error('not found ' + req.params.id));
    res.json(patient);
  }).populate('verantwoordelijke');;
});*/

router.get('/rusthuis/bewoner/:patient', auth, function (req, res) {
  res.json(req.patient);
});

router.delete("/rusthuis/deletebewoner/:patient", auth, function (req, res, next) {
  req.patient.remove(function (err) {
    if (err) { return next(err); }
    res.json("Remove patient");
  });
});

router.post('/rusthuis/adddokter/', auth, function (req, res, next) {
  let dokter = new Dokter(req.body);
  dokter.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.post('/rusthuis/addverantwoordelijke/', auth, function (req, res, next) {
  let verantw = new Verantwoordelijke(req.body);
  verantw.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.get('/rusthuis/verantwoordelijken/', auth, function (req, res, next) {
  let query = Verantwoordelijke.find({}).populate('patienten');
  query.exec(function (err, verantw) {
    if (err) return next(err);
    res.json(verantw);
  });
});


router.get('/rusthuis/dokters/', auth, function (req, res, next) {
  Dokter.find(function (err, bewoners) {
    if (err) return next(err);
    res.json(bewoners);
  });
});

router.delete('/rusthuis/verwijderdokter/:id', auth, function (req, res, next) {
  Dokter.findByIdAndRemove(req.params.id, function (err, dokter) {
    if (err)
      return next(err);
    res.json("removed dokter");
  });
});

router.get('/rusthuis/dokter/:id', auth, function (req, res, next) {
  Dokter.findById(req.params.id, function (err, dokter) {
    if (err) return next(err);
    if (!dokter)
      return next(new Error('not found ' + req.params.id));
    res.json(dokter);
  });
});

router.put('/rusthuis/updatedokter/:id', auth, function (req, res, next) {
  let dk = new Dokter(req.body);
  Dokter.findByIdAndUpdate(req.params.id, dk, function (err, dokter) {
    res.send(dokter);
  });
});

router.put('/rusthuis/updatebewoner/:id', auth, function (req, res, next) {
  let pt = new Patient(req.body);
  Patient.findByIdAndUpdate(req.params.id, pt, function (err, patient) {
    res.send(patient);
  });
});

/*router.post('/rusthuis/bewoner/:patient/verantwoordelijke', auth, function (req, res, next) {
  let verantw = new Verantwoordelijke(req.body.verantw);
  verantw.isNew = verantw._id === undefined ? true : false;
  req.patient.verantwoordelijke = verantw;
  req.patient.save(function (err, patient) {
    if (err) return next(err);
    verantw.patienten.push(patient);
    /*verantw.save(function (err, rec) {
      if (err) return next(err);
      res.json(verantw);
    });
  });
});*/

/*router.post('/rusthuis/bewoner/:patient/dokter', auth, function (req, res, next) {
  let dk = new Dokter(req.body.dk);
  let patient = new Patient(req.patient);
  console.log(dk);
  dk.isNew = dk._id == undefined ? true : false;
  //if (dk._id === undefined) {
  dk.save(function (err, dokter) {
    if (err) return next(err);
    req.patient.dokter = dokter;
    req.patient.save(function (err, rec) {
      if (err) return next(err);
      res.json(dokter);
    });
  });
  /*} else {
    req.patient.dokter = dk;
    console.log(dk);
    req.patient.save(function (err, rec) {
      if (err) return next(err);
      res.json(dk);
    });
  }
});*/

router.post('/rusthuis/bewoner/', auth, function (req, res, next) {
  let patient = new Patient(req.body.patient);
  let verantw = new Verantwoordelijke(req.body.verantw);
  let dokter = new Dokter(req.body.dokter);

  verantw.isNew = verantw.patienten.length == 0 ? true : false;
  console.log(dokter._id);
  dokter.isNew = dokter._id == undefined ? true : false;
  verantw.patienten.push(patient);
  verantw.save(function (err, rec) {
    if (err) return next(err);
  });

  patient.verantwoordelijke = verantw;
  patient.dokter = dokter;

  dokter.save(function (err, rec) {
    if (err) return next(err);
  });

  patient.save(function (err, rec) {
    if (err) return next(err);
  });
});

router.put('/rusthuis/updatebewoner/', auth, function (req, res, next) {
  let patient = new Patient(req.body.patient);
  let dokter = new Dokter(req.body.dokter);

  patient.dokter = dokter;
  patient.isNew = false;
  patient.save(function (err, rec) {
    if (err) return next(err);
  })
});

router.get('/rusthuis/verantwoordelijke/:id', auth, function (req, res, next) {
  let query = Verantwoordelijke.findById(req.params.id).populate('patienten');
  query.exec(function (err, verantw) {
    if (err) return next(err);
    if (!verantw)
      return next(new Error('not found ' + req.params.id));
    res.json(verantw);
  });
});

router.post('/rusthuis/bewoner/:patient/message', auth, function (req, res, next) {
  let message = new Message(req.body.message);
  req.patient.chat.push({ messageId: message.messageId, sender: message.sender, content: message.content })
  req.patient.save(function (err, rec) {
    if (err) return next(err);
    res.json(message);
  })

  /*message.save(function (err, mes) {
    if (err) return next(err);
    req.patient.chat.push(message);
    req.patient.save(function (err, rec) {
      if (err) return next(err);
      res.json(mes);
    })
  });*/
});

/*router.put('/rusthuis/bewoner/:patient/updatedokter', auth, function (req, res, next) {
  let dk = new Dokter(req.body);
  let patient = new Patient(req.patient);

  Patient.findByIdAndUpdate(patient._id, patient, function (err, dokter) {
    if (err) return next(err);
    req.patient.dokter = dokter;
    req.patient.save(function (err, rec) {
      if (err) return next(err);
      res.json(patient);
    })
  });
});*/

router.post('/rusthuis/addnotificatie/', auth, function (req, res, next) {
  Notificatie.findOne({ 'patientid': req.body.id }, function (err, notificatie) {
    if (!notificatie) {
      let not = new Notificatie(req.body.not);
      not.save(function (err, rec) {
        if (err) return next(err);
        res.json(rec);
      });
    }
  });
});

router.get('/rusthuis/notificaties/', auth, function (req, res, next) {
  Notificatie.find(function (err, nots) {
    if (err) return next(err);
    res.json(nots);
  });
});

router.get('/rusthuis/verantwoordelijkebyemail/:email', auth, function (req, res, next) {
  let query = Verantwoordelijke.findOne({ 'email': req.params.email }).populate('patienten');
  query.exec(function (err, verantw) {
    if (err) return next(err);
    res.json(verantw.patienten);
  })
});

router.delete("/rusthuis/deletenotificaties", auth, function (req, res, next) {
  Notificatie.remove({}, function (err) {
    if (err) { return next(err); }
    res.json("removed all notificaties");
  });
});

router.post("/rusthuis/globalMessage", auth, function (req, res, next) {
  let message = new Message(req.body);
  Patient.find({}, function (err, patienten) {
    for (var i = 0; i < patienten.length; i++) {
      let patient = patienten[i];
      message.messageId = patient.chat.length + 1;
      patient.chat.push(message);
      patient.save(function (err, rec) {
        if (err) return next(err);
      });
    }
    res.json("Global message sent!");
  });
});

