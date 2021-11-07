const express = require("express");
const { create } = require("../controllers");

const router = express.Router();

router.post("/searches", create);

module.exports = router;

// {
//     id: '',
//         searchId: "",
//         results: [],

// }
