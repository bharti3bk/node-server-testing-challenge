const express = require("express");
const db = require('../Data/db_config.js');
const server = express();
server.use(express.json()); 
module.exports = {
   insert , 
   remove
} 

function insert(user) {
    return db('users')
      .insert(user)
      .then(ids => ({ id: ids[0] }));
  } 

  function remove(id) {
    return db('users')
      .where('id', Number(id))
      .del();
  }

