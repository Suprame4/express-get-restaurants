const express = require('express')

const { Restaurant } = require('../models')
const router = express.Router()

//TODO: Create your GET Request Route Below: 
router.get("/", async (req, res) => {

    const data = await Restaurant.findAll()
    res.json(data)
})

//restaurant part-2
router.get("/:id", async (req, res) => {
    const data = await Restaurant.findByPk(req.params.id);
    return res.json(data);
  });

//restaurant part-3
router.post("/", async (req, res) => {
    const data = await Restaurant.create(req.body)
    res.json(data)
})

//update 
router.put("/:id", async (req, res) => {
    const data = await Restaurant.findByPk(req.params.id)
    await data.update(req.body)

    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants)    
})

router.delete("/:id", async (req, res) => {
    const data = await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    })
    const allRestaurants = await Restaurant.findAll()
    res.json(allRestaurants)
})

module.exports = router