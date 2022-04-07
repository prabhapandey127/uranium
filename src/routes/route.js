const express = require('express');

const router = express.Router();

const films = [
    {
        "id":1,
        "name":"The Shining"
    },
    {
        "id":2,
        "name":"Incendies"
    },
    {
        "id":3,
        "name":"Rang de Basanti"
    },
    {
        "id":4,
        "name":"Finding Nemo"
    }
]

const movies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins'];


// get movies
router.get('/movies', function (req, res) {
    res.send(movies);
});

//get single movies and error if movies not exits 
router.get('/movies/:id', function (req, res) {
    let id = req.params.id;
    if(movie[id]){
        res.send(movies[id]);
    }
    else{
        throw new Error('Uh no! use a valid index ');
    }
    
});

router.get('/films', function (req, res) {
    res.send(films);
});

module.exports = router;
