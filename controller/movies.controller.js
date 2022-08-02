const { request } = require("express");
const { response } = require("express");
const Peli_serie = require("../models/pelis.model");
const personaje = require("../models/personaje.model");
require("../models/asociaciones");

const getMovies = (req, res = response) => {
  res.status(200).json({ msg: "pelis" });
};

const createMovies = async (req = request, res = response) => {
  const { imagen, titulo, fecha_Creacion, calificacion, reparto } = req.body;
  let repartoBD;
  if (reparto) {
    repartoBD = await personaje.findAll({
      where: {
        id: reparto,
      },
    });
  } else {
    return res.status(400).json({
      msg: "no hay reparto declarado",
    });
  }

  let movie = await Peli_serie.create({
    imagen,
    titulo,
    fecha_Creacion,
    calificacion,
  });

  movie.addPersonajes(repartoBD);

  res.status(200).json({ msg: "pelis-create", movie });
};

const updateMovies = async (req = request, res = response) => {
  try {
    const { imagen, titulo, fecha_Creacion, calificacion, reparto } = req.body;
    let repartoBD;
    if (reparto) {
      repartoBD = await personaje.findAll({
        where: {
          id: reparto,
        },
      });
    }

    let movieUpdate = await Peli_serie.update(
      {
        imagen,
        titulo,
        fecha_Creacion,
        calificacion,
      },
      { where: { id: req.params.id } }
    );
    const movie = await Peli_serie.findByPk(req.params.id);
    movie.setPersonajes(repartoBD);

    res.status(200).json({ msg: "pelis-create", movieUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "no se actualizo" });
  }
};
const deleteMovies = (req, res = response) => {
  res.status(200).json({ msg: "pelis-delete" });
};

module.exports = {
  getMovies,
  createMovies,
  updateMovies,
  deleteMovies,
};
