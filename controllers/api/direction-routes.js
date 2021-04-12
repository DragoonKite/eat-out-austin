const router = require('express').Router();
//FUTURE DEVELOPMENT
//get lat long for chosen restaurant
router.get('/:address', (req, res) => {
    const address = req.params.address
    const api = process.env.POSITION_API
    const restUrl = "http://api.positionstack.com/v1/forward?access_key=" + api + "&query=" + address + ", Austin, TX";
    res.json(restUrl)
})

//get directions to restaurant
router.get('/latlon/:latlon', (req,res) => {
    const latlon = req.params.latlon.split(',');
    const lat = latlon[0];
    const lon = latlon[1];
    const userLat = latlon[2];
    const userLon = latlon[3];
    console.log (lat, lon, userLat, userLon)
    const api = process.env.TOMTOM_API;
    const direcUrl = "https://api.tomtom.com/routing/1/calculateRoute/" + userLat + ',' + userLon + ":" + lat +',' + lon + '/json?instructionsType=text&language=en-US&vehicleHeading=90&sectionType=traffic&travelMode=car&vehicleMaxSpeed=120&key=' + api;
    res.json(direcUrl)
})
module.exports = router;