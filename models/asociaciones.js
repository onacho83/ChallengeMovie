const peli_serie = require("./pelis.model");
const Personaje = require("./personaje.model");
const Genero = require("./genero.model");
const user = require("./user.model");

// relacion Muchoa a muchos

Personaje.belongsToMany(peli_serie, {
  through: "personaje_movie",
});
peli_serie.belongsToMany(Personaje, {
  through: "personaje_movie",
});
peli_serie.hasMany(Genero);
