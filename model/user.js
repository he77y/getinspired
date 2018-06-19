'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer  = require('multer');
var config = require('../config/config');
var mongoosastic = require('mongoosastic');

//User Model Schema 
var SearchSchema = new Schema({
    firstname: {
        type: String,
        required: 'Please enter your firstname',
  
 
    },
     lastname: {
        type: String,
        required: 'Please enter your lastname',

    

    },
    imagepath: String,
    originalname : String,
    number: {
        type: String,
        required: 'Please enter your mobile number',
        es_indexed:true
   
    },
     email: {
        type: String,
        unique: true,
        lowercase:true,
        required: 'Please enter your email',
        es_indexed:true
    },
    address: {
        type: String,
        required: 'Please enter your Address',
        trim: true,
        es_indexed:true
    },
    city: {
        type: String,
        required: 'Please enter your city',
        trim: true,
        es_indexed:true
    },
    loc: {
        type: { type: String },
        coordinates: [Number],
    },
    about:{
        type : String,
        es_indexed:true

    },
    interests: {
        type: Array,
        es_indexed:true
    },
});

SearchSchema.plugin(mongoosastic);


module.exports = mongoose.model('Search', SearchSchema);