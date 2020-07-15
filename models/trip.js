"use strict";
module.exports = (sequelize, DataTypes) => {
  const trip = sequelize.define(
    "trip",
    {
      origin: {
        type: DataTypes.INTEGER,
        references: {
          model: "planets",
          key: "id",
        },
        // onUpdate: "CASCADE",
        // onDelete: "CASCADE",
        allowNull: false,
      },
      destination: {
        type: DataTypes.INTEGER,
        references: {
          model: "planets",
          key: "id",
        },
        allowNull: false,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departingDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  trip.associate = function (models) {
    // associations can be defined here
    // trip.belongsTo(models.planet, {
    //   targetKey: "destination",
    //   foreignKey: "destinationId",
    // }); //Team.hasOne(Game, { as: 'HomeTeam', foreignKey: 'homeTeamId' });

    // trip.belongsTo(models.planet, {
    //   //  as: "origin",d
    //   foreignKey: "originId",
    // }); ////Team.hasOne(Game, { as: 'AwayTeam', foreignKey: 'awayTeamId' });
    trip.hasMany(models.planet, { foreignKey: "planetId" });
    trip.hasMany(models.booking);
  };
  return trip;
};
