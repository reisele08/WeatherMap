const Encoder = require("../models/PasswordEncoder");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/UserModel');
const Status = require('../models/statusModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//http://localhost:8000/users/
//raw, json - {
//         "name": "name",
//         "username": "username2",
//         "password": "password",
//         "email": "email",
//         "role": "USER"
//     }

router.get('/', (req, res, next) => {
    User.find()
        .exec()
        .then(usersList => res.status(200).json(usersList))
        .catch(err => res.status(500).json({ error: err }));
});

//for login
router.get('/login/:username/:password', (req, res, next) => {
    const username = req.params.username;
    const password = req.params.password;
    User.findOne({username: username})
        .exec()
        .then(user => {
            if (user) {
                // res.status(200).json({ user: user});
                //first not hashed
                bcrypt.compare(password, user.password).then(function(result){
                    if (result) {
                        res.status(200).json({ message: 'Login Successful', user: user});
                    } else {
                        res.status(404).json({ message: 'Incorrect Inputs'});
                    }
                })
            } else {
                res.status(404).json({ message: 'Incorrect Inputs' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

});


router.post('/', (req, res, next) => {
    const hashedPW = bcrypt.hashSync(req.body.password, saltRounds);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        password: hashedPW,
        email: req.body.email,
        role: req.body.role
    });
    user
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err));
    res.status(200).json({
        message: 'New User has been created',
        user: user //this is for debugging plz delete it
    });
});

//users/update
//updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
router.post('/update/', (req, res, next) => {
    User.updateOne({username:req.body.username}, { $set:{role: req.body.role }})
        .exec()
        .then(user =>  res.status(200).json({ message: 'Update Successful', user:user}))
        .catch(err =>  res.status(500).json({ error: err }))
});


router.post('/updateProfile/', (req, res, next) => {
    User.updateOne({username:req.body.username}, { $set:{name: req.body.name, email:req.body.email}})
        .exec()
        .then(user =>  res.status(200).json({ message: 'Update Successful', user:user}))
        .catch(err =>  res.status(500).json({ error: err }))
});


router.post('/updatePassword/', (req, res, next) => {
    const hashedPW = bcrypt.hashSync(req.body.newPassword, saltRounds);
    User.updateOne({username:req.body.username}, { $set:{password: hashedPW}})
        .exec()
        .then(user =>  res.status(200).json({ message: 'Update Successful', user:user}))
        .catch(err =>  res.status(500).json({ error: err }))
});



router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    User.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(500).json({ error: err }));
});


router.post("/poststatus", (req, res, next) => {
    console.log(req.body.text)
    const status = new Status({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text
    });
    status
        .save()
        .then(result=>console.log(result))
        .catch(err => console.log(err));
});

// //find by _id
// router.get('/:id', (req, res, next) => {
//     const id = req.params.id;
//     User.findById(id)
//         .exec()
//         .then(user => {
//             if (user) {
//                 res.status(200).json(user);
//             } else {
//                 res.status(404).json({ message: 'User not found' });
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ error: err });
//         });
// });


//find by username
// for sign up - unique username
router.get('/find/:username', (req, res, next) => {
    const username = req.params.username;
    User.findOne({username: username})
        .exec()
        .then(user => {
            if (user) {
                res.status(200).json({message: 'User exists', data:user});
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

module.exports = router;