const sql = require("../db.js");
const { v4: uuidv4 } = require('uuid');

const TABLE = 'wrestling_promotions';

// constructor
const Promotion = (promotion) => {
  this.uuid = uuidv4();
  this.name = promotion.name;
  this.description = promotion.description;
  this.image_url = promotion.image_url;
  this.alias = promotion.alias;
  this.founded = promotion.founded;
  this.active = promotion.active;
};

Promotion.getWrestlersByAlias = (alias, result) => {
  let query = `
    SELECT
      wp.uuid as promotion_id,
      wp.name as promotion_name,
      wp.alias as promotion_alias,
      w.*
    from ${TABLE} wp
      INNER JOIN wrestlers_to_promotions wtp
        ON wtp.promotion_id = wp.id
      INNER JOIN wrestlers w
        ON w.id = wtp.wrestler_id
      WHERE
        wp.alias = '${alias.toUpperCase()}'
  `;

  console.log(query.toString());

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Promotion;
