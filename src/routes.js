const router = express.Router();
const { register, login } = require("../controllers/authControllers");


app.get("/", (req, res) => {
    res.send("Hello World !!");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;