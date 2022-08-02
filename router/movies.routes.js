const { Router } = require("express");
const {
  getMovies,
  createMovies,
  updateMovies,
  deleteMovies,
} = require("../controller/movies.controller");

const router = Router();

router.get("/", getMovies);
router.post("/", createMovies);
router.put("/:id", updateMovies);
router.delete("/", deleteMovies);

module.exports = router;
