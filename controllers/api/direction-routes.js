const router = require('express').Router();

//get lat long for chosen restaurant
router.get('/:address', (req, res) => {
    const address = req.params.address
    const api = process.env.POSITION_API
    const restUrl = "http://api.positionstack.com/v1/forward?access_key=" + api + "&query=" + address + ", Austin, TX";
    res.json(restUrl)
})

module.exports = router;