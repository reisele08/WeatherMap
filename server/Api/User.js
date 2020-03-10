const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { name, username, password, email, role } = req.body;
    let user = {};
    user.name = name;
    user.username = username;
    user.password = password;
    user.email = email;
    user.role = role;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;