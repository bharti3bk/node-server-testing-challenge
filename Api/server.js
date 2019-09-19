const express = require("express"); 
const server = express(); 
const db = require('../Data/db_config.js');

server.use(express.json());   

server.get('/' , (req,res) => {
    res.json({message:" I am Working ......"})
})   
 
server.post("/api/users", (req, res) => {
    const userData = req.body;
    const response = db.insert(userData)
    response.then(result => {
        res.json(result);
    })
     .catch(error => {
        res.send(error); 
    })
})

server.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const deleteUser = db.remove(id)
    deleteUser.then(response => {
        res.json(response);
    })
        .catch(error => {
            res.json(error)
        })
})


module.exports = server;  