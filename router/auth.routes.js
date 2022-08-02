const { Router } = require("express");
const { check } = require("express-validator");
const { login, userRegister } = require("../controller/auth.controller");
const {
  validarCampos,
  emailUnique,
} = require("../middleware/validacionesCustom");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hola Mundo",
  });
});

router.post(
  "/login",
  [
    check("email", "no es un mail valido").isEmail(),
    check("password", "el password es obligatorio").notEmpty(),
    validarCampos,
  ],
  login
);
router.post(
  "/singup",
  [
    check("nombre", "el nombre tiene que ser obligatorio").not().isEmpty(),
    check("email", "no es un mail valido").isEmail(),
    check("password", "el password es obligatorio").notEmpty(),
    check("email", "el email ya existe").custom(emailUnique),
    validarCampos,
  ],
  userRegister
);
module.exports = router;
