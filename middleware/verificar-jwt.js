const { response } = require("express");
const { request } = require("express");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/user.model");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.headers.token;
  console.log(token);

  try {
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const login = await Usuario.findByPk(id);
    req.login = login;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
