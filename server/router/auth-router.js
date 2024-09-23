const express = require('express');
const router = express.Router();
const {home, register} =require("../controllers/aut-controller");

router.route("/").get(home);

// router.get("/",(req,res)=>{
//     res
//     .status(200)
//     .send("using router");
// });

router.route("/register").get((req,res)=>{
    res.status(200).send("welcome to registartion page");
});

router.route('/register').get(register);
module.exports = router;