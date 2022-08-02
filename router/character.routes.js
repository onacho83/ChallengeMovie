const { Router } = require("express");
const {
  getCharacters,
  createCharacters,
  updateCharacters,
  deleteCharacters,
} = require("../controller/characters.controllers");

const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacters);
router.put("/", updateCharacters);
router.delete("/", deleteCharacters);

module.exports = router;
