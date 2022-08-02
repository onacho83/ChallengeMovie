const { request, response } = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../models/user.model");
const { generarJWT } = require("../helpers/generar-jwt");
const { sendMail } = require("../mail/config");

const login = async (req = request, res = response) => {
  const { password, email } = req.body;

  try {
    console.log(email);
    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    //verificar si el correo existe
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario no valido - email",
      });
    }

    //verificar si el usuario está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "El usuario no es valido - estado",
      });
    }

    //verificar pass correcto
    const passValido = bcrypt.compareSync(password, usuario.password);
    if (!passValido) {
      return res.status(400).json({
        msg: "usuario no valido - pass",
      });
    }

    //generar jwt

    const token = await generarJWT(usuario.id);

    //usuario autenticado
    res.status(200).json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

const userRegister = async (req = request, res = response) => {
  const { password, ...resto } = req.body;

  try {
    //validar contraseña
    resto.password = bcrypt.hashSync(password, 10);

    const usuario = new Usuario(resto);
    await usuario.save();
    sendMail(usuario);
    res.status(200).json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

module.exports = {
  login,
  userRegister,
};
