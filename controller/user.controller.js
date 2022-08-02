const { request, response } = require("express");
const Usuario = require("../models/user.model");
const bcript = require("bcrypt");

const userGet = async (req = request, res = response) => {
  const user = await Usuario.findAll();
  res.status(200).json({
    user,
  });
};

const userPost = async (req = request, res = response) => {
  const { password, ...resto } = req.body;

  try {
    //validar contraseña
    resto.password = bcript.hashSync(password, 10);

    const usuario = new Usuario(resto);
    await usuario.save();

    res.status(200).json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

const userPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  await Usuario.update({ nombre, email }, { where: { id } })
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: "hable con el admin" });
    });
};

const userDelete = async (req = request, res = response) => {
  const { id } = req.params;
  const { estado } = req.body;

  const login = req.login;

  await Usuario.update({ estado }, { where: { id } })
    .then((result) => {
      res.status(200).json({
        result,
        msg: "usuario eliminado",
        login,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: "hable con el admin" });
    });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
