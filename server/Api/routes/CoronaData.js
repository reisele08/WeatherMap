const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');


router.get('/:country/:status', (req, res, next) => {//whole country

    fetch('https://api.covid19api.com/total/dayone/country/'+req.params.country+'/status/'+req.params.status)
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



//all countries "https://pomber.github.io/covid19/timeseries.json"// comparison on top ones.
//decide whihc countries.
//https://api.covid19api.com/stats  whole world total
module.exports = router;