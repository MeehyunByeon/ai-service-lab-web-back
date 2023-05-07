const express = require("express");
const User = require("../models/user");

const router = express.Router();
console.log("나는 미현이다!!! 우하하!!!");

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.render("sequelize", { users });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

module.exports = router;
