const { response } = require("express");
const Personaje = require("../models/personaje.model");

const getCharacters = (req, res = response) => {
  res.status(200).json({ msg: "personajes" });
};
const createCharacters = async (req, res = response) => {
  // "imagen":"/path",
  //   "nombre":"Elsa",
  //   "edad": 18,
  //   "peso":55,
  //   "historia":"Reina del Hielo"

  const { imagen, nombre, edad, peso, historia } = req.body;

  const personaje = await Personaje.create({
    imagen,
    nombre,
    edad,
    peso,
    historia,
  });

  res.status(200).json({ msg: "personajes-create", personaje });
};
const updateCharacters = (req, res = response) => {
  res.status(200).json({ msg: "personajes-update" });
};
const deleteCharacters = (req, res = response) => {
  res.status(200).json({ msg: "personajes-delete" });
};

module.exports = {
  getCharacters,
  createCharacters,
  updateCharacters,
  deleteCharacters,
};
