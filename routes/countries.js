const express = require("express");
const router = express.Router();
const data = require("../data/countries.json");

router.get("/", (req, res) =>{ //kui tuleb päring /books , siis :
    res.status(200).json(data);
});

router.get("/:countryId", (req, res) =>{
    const requestedCountryId = req.params.countryId;
    const country = data.countries.filter(countryInData => {
        if(countryInData.id.toString() === requestedCountryId){
            return countryInData;
        }
    });

    res.status(200).json(country);
});

module.exports = router;