const router = require("express").Router();
const { register, login } = require("./controllers/authControllers");

// Authuser Route
router.post("/api/auth/register", register);
router.post("/api/auth/login", login);

//Resep Makanan Route


module.exports = router;