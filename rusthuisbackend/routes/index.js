var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Patient = mongoose.model('Patient');
module.exports = router;

router.get('/rusthuis/bewoners/', function (req, res, next) {
  Patient.find(function (err, bewoners) {
    if (err) return next(err);
    res.json(bewoners);
  });
});

router.post('/rusthuis/bewoners/', function (req, res, next) {
  let patient = new Patient(req.body);
  patient.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

/*router.get('/rusthuis/bewoner/:patient', function (req, res, next) {
  res.json(req.patient);
});

router.param('patient', function (req, req, next, id) {
  let query = Patient.findById(id);
  query.exec(function (err, patient) {
    if (err) { return next(err); }
    if (!patient) { return next(new Error('not found ' + id)); }
    req.patient = patient;
    return next();
  });
});*/

router.get('/rusthuis/bewoner/:id', function(req, res, next) {
  Patient.findById(req.params.id, function(err, patient) {
    if (err) return next(err);
    if (!patient) 
      return next(new Error('not found ' + req.params.id));
    res.json(patient);
  });
});

/*router.get('/patienten/', function(req, res, next) {
  Patient.find(function(err, patienten){
    if(err) return next(err);
    res.json(patienten);
  });
});*/