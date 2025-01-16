const router = require("express").Router();
const { register, login } = require("./controllers/authControllers");


router.get("/", (req, res) => {
    res.send("Hello World !!");
});

router.post("/api/auth/register", register);
router.post("/api/auth/login", login);

module.exports = router;