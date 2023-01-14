const { DataTypes, Sequelize } = require("sequelize");

// Exportamos una funcion que defina el modelo correspondiente a la tabla GENRE
//Injentar SEQUELiZE

module.exports = (sequelize) => {
  sequelize.define("genre", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
