const Cars = require('./cars-model.js');
const router = require('express').Router()


router.get('/', (req, res) => {
    Cars.find()
        .then(cars => res.status(200).json(cars))
        .catch(err => { console.error(err); res.status(500).json({ errorMessage: "there was an error retrieving cars from the database" }) })
})

router.post('/', (req, res) => {

    const car = req.body
    Cars.add(car)
        .then(carro =>{console.log(carro) ;res.status(200).json({ message: `Successfully added ${[carro].length} ${ carro.make} ${ carro.model}, at id :[#${carro.id}] to the database. ` })})
        .catch(err => { console.error(err); res.status(500).json({ errorMessage: "there was an error retrieving cars from the database" }) })
})
module.exports = router