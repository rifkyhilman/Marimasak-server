const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");
const generateAccessToken = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const {
  createTable,
  checkRecordExists,
  insertRecord,
} = require("../utils/sqlFunctions");

const register = async (req, res) => {
  const { nama, email, password } = req.body;
  if (!nama || !email || !password) {
    res
      .status(400)
      .json({ error: "Nama, Email atau Password tidak boleh kosong !" });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = {
    userId: uuidv4(),
    nama,
    email,
    password: hashedPassword,
    role: "user"
  };
  try {
    await createTable(userModel);
    const userAlreadyExists = await checkRecordExists("users", "email", email);
    if (userAlreadyExists) {
      res.status(409).json({ error: "Email already exists" });
    } else {
      await insertRecord("users", user);
      res.status(201).json({ alert: true, message: "User created successfully!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ error: "Email or Password fields cannot be empty!" });
    return;
  }

  try {
    const existingUser = await checkRecordExists("users", "email", email);

    if (existingUser) {
      if (!existingUser.password) {
        res.status(401).json({ error: "Invalid credentials", message: "Password tidak boleh kosong" });
        return;
      }

      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (passwordMatch) {
        res.status(200).json({
          alert: true,
          userId: existingUser.userId,
          access_token: generateAccessToken(existingUser.userId),
          message: "Berhasil Login !"
        });
      } else {
        res.status(401).json({ error: "Invalid credentials", message: "Password salah" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};