const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');


router.get('/canada/country/confirmed', (req, res, next) => {//whole country

    fetch('https://api.covid19api.com/total/dayone/country/canada/status/confirmed')
        .then(response => response.json())
        .then(data => {
            var dates = data.map(function(fields){
                return fields.Date;
            });

            var values = data.map(function(fields){
                return fields.Cases;
            });

            var pair = {
                dates,
                values
            }
            res.json(pair);
            //res.json("looking corona path")
            console.log(pair);
        })
        .catch(err => {
            console.log("could not get data")
        })
});


router.get('/canada/country/recovered', (req, res, next) => {//whole country

    fetch('https://api.covid19api.com/total/dayone/country/canada/status/recovered')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.map(function(fields){
                var obj = {
                    "date":fields.Date,
                    "cases":fields.Cases
                }
                return obj;
            });

            res.json(filteredData);
            //res.json("looking corona path")
            console.log(filteredData);
        })
        .catch(err => {
            console.log("could not get data")
        })
});

router.get('/canada/country/Deaths', (req, res, next) => {//whole country

    fetch('https://api.covid19api.com/total/dayone/country/canada/status/deaths')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.map(function(fields){
                var obj = {
                    "date":fields.Date,
                    "cases":fields.Cases
                }
                return obj;
            });

            res.json(filteredData);
            //res.json("looking corona path")
            console.log(filteredData);
        })
        .catch(err => {
            console.log("could not get data")
        })
});


//https://api.covid19api.com/dayone/country/united-kingdom/status/confirmed
//includes provinces-> aswell,

router.get('/US/country/confirmed', (req, res, next) => {//Whole country

    fetch('https://api.covid19api.com/total/dayone/country/US/status/confirmed')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.map(function(fields){
                var obj = {
                    "date":fields.Date,
                    "cases":fields.Cases
                }
                return obj;
            });

            res.json(filteredData);
            //res.json("looking corona path")
            console.log(filteredData);
        })
        .catch(err => {
            console.log("could not get data")
        })
});
router.get('/US/country/recovered', (req, res, next) => {//Whole country

    fetch('https://api.covid19api.com/total/dayone/country/US/status/recovered')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.map(function(fields){
                var obj = {
                    "date":fields.Date,
                    "cases":fields.Cases
                }
                return obj;
            });

            res.json(filteredData);
            //res.json("looking corona path")
            console.log(filteredData);
        })
        .catch(err => {
            console.log("could not get data")
        })
});
router.get('/country/US/deaths', (req, res, next) => {//Whole country

    fetch('https://api.covid19api.com/total/dayone/country/US/status/deaths')
        .then(response => response.json())
        .then(data => {
            var filteredData = data.map(function(fields){
                var obj = {
                    "date":fields.Date,
                    "cases":fields.Cases
                }
                return obj;
            });

            res.json(filteredData);
            //res.json("looking corona path")
            console.log(filteredData);
        })
        .catch(err => {
            console.log("could not get data")
        })
});

//all countries "https://pomber.github.io/covid19/timeseries.json"// comparison on top ones.
//decide whihc countries.
//https://api.covid19api.com/stats  whole world total
module.exports = router;