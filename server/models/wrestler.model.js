const sql = require("../db.js");
const { v4: uuidv4 } = require('uuid');

const TABLE = 'wrestlers';

// constructor
const Wrestler = (wrestler) => {
  this.uuid = uuidv4();
  this.forename = wrestler.forename;
  this.middle_names = wrestler.middle_names;
  this.surname = wrestler.surname
  this.ring_name = wrestler.ring_name
  this.slug = wrestler.slug
  this.active = wrestler.active
  this.date_of_birth = wrestler.date_of_birth
  this.date_of_death = wrestler.date_of_death;
};

Wrestler.getAll = result => {
  sql.query(`SELECT * FROM ${TABLE}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Wrestler.findBySlug = (slug, result) => {
  sql.query(`SELECT * FROM ${TABLE} where slug = '${slug}'`, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Wrestler;
