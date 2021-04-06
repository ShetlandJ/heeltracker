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

Promotion.getByAlias = (alias, result) => {
  let query = `
    SELECT * from ${TABLE} wp
    WHERE wp.alias = '${alias.toUpperCase()}'
  `;

  sql.query(query, (err, res) => {
    console.log("res");
    console.log(res);
    console.log("res");
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res[0]);
  });
};


Promotion.getWrestlersByAlias = (alias, result) => {
  let promotionQuery = `
    SELECT * from ${TABLE} wp
    WHERE wp.alias = '${alias.toUpperCase()}'
  `;

  const wrestlersQuery = `
    SELECT
      w.*
    from ${TABLE} wp
      INNER JOIN wrestlers_to_promotions wtp
        ON wtp.promotion_id = wp.id
      INNER JOIN wrestlers w
        ON w.id = wtp.wrestler_id
      WHERE
        wp.alias = '${alias.toUpperCase()}'
  `;

  sql.query(wrestlersQuery, (err, wrestlers) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    sql.query(promotionQuery, function (err, promotion) {
      if (err) throw err;
      console.log(promotion);
      console.log(wrestlers);


      result(null, {
        data: {
          promotion: promotion[0],
          wrestlers
        }
      });
    });
  });
}

module.exports = Promotion;
