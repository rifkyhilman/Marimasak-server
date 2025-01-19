const mysql = require("mysql");
const config = require("../config/config");
const pool = mysql.createPool(config);


const getAllResep = () => {
  return new Promise((resolve, reject) => {
    const query = ``;

    pool.query(query, [record], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};