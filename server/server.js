const express = require("express");
const userRouter = require("../router/user.routes");
const authRouter = require("../router/auth.routes");
const movieRouter = require("../router/movies.routes");
const charactersRouter = require("../router/character.routes");
const cors = require("cors");
const db = require("../database/mysqlCNN");
require("../models/asociaciones");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.path = {
      auth: "/api/auth",
      user: "/api/user",
      movies: "/api/movies",
      characters: "/api/characters",
    };

    this.middleware();
    this.router();
    this.databaseCNN();
  }

  router() {
    this.app.get("/", (req, res) => {
      res.status(200).json({
        msg: "Hola Mundo",
      });
    });
    this.app.use(this.path.auth, authRouter);
    this.app.use(this.path.user, userRouter);
    this.app.use(this.path.movies, movieRouter);
    this.app.use(this.path.characters, charactersRouter);
  }

  async databaseCNN() {
    try {
      await db.sync({ force: false });
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("escuchando por http://localhost:" + this.port);
    });
  }
}

module.exports = Server;
