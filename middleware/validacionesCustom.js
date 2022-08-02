const { validationResult } = require("express-validator");
const Usuario = require("../models/user.model");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors,
    });
  }
  next();
};

const emailUnique = async (email) => {
  const emailExiste = await Usuario.findOne({
    where: {
      email,
    },
  });
  if (emailExiste) {
    throw new Error("El mail ya se encuentra registrado");
  }
};

module.exports = {
  validarCampos,
  emailUnique,
};
