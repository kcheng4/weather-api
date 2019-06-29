const _ = require('lodash');
const axios = require('axios');
const {googleKey} = require('../keys/googleKeys');


const key = googleKey || process.env.GOOGLE_KEY;

const geoLocation = (areaCode) =>{
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${areaCode}&key=${key}`)
    .then((res)=>{
         const lat = res.data.results[0].geometry.location.lat;
         const long = res.data.results[0].geometry.location.lng;
        return [lat,long];
    })
}

module.exports = {
    geoLocation
}