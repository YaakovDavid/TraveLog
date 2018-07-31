const db = require('../database/connection');
const Destinations = {};


Destinations.all = () => {
  return db.any('SELECT * FROM Destinations');
};

Destinations.createDest = (newDest) => {
  return db.one(
    'INSERT INTO destinations (city, country, continent) VALUES (${city}, ${country}, ${continent}) RETURNING *', newDest);
};

Destinations.updateDest = (updateDest) => {
  return db.none("UPDATE destinations SET city = ${city}, country = ${country}, continent = ${continent} WHERE id = ${id}", updateDest);
};


module.exports = Destinations;
