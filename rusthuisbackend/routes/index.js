var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Patient = mongoose.model('Patient');
module.exports = router;

router.get('/patienten/', function(req, res, next) {
  Patient.find(function(err, patienten){
    if(err) return next(err);
    res.json(patienten);
  });
});

router.get('/patienten/', function(req, res, next) {
  Patient.find(function(err, patienten){
    if(err) return next(err);
    res.json(patienten);
  });
});