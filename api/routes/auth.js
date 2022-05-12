const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// REGİSTER
router.post("/register", async (req, res) => {
    try {
        const salt =await bcrypt.genSalt(10);
        const heshedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: heshedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("wrong credentials!");
        const validate = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("wrong credentials!");
        const {password, ...others} = user._doc;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;