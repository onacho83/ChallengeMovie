const { Router } = require("express");
const { check } = require("express-validator");
const {
  userGet,
  userPost,
  userPut,
  userDelete,
} = require("../controller/user.controller");
const {
  validarCampos,
  emailUnique,
} = require("../middleware/validacionesCustom");
const { validarJWT } = require("../middleware/verificar-jwt");

const router = Router();
//http://localhost:3000/api/user
router.get("/", userGet);
//http://localhost:3000/api/user

//http://localhost:3000/api/user/id
router.put("/:id", [validarJWT, validarCampos], userPut);
//http://localhost:3000/api/user/id
router.delete("/:id", [validarJWT, validarCampos], userDelete);

module.exports = router;
