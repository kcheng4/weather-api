const _ = require('lodash');
const axios = require('axios');
const {darkSkyKey} = require('../keys/darkSkyKey');

const key = darkSkyKey || process.env.DARK_SKY_KEY;

const darkSky = (lat, lng) =>{
    return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
    .then((res)=>{
        let weatherArray=[];
        for(let x=0;x<5;x++){
            weatherArray.push({
                'time':res.data.daily.data[x].time,
                'summary':res.data.daily.data[x].summary,
                'icon':res.data.daily.data[x].icon,
                'tempHigh':res.data.daily.data[x].temperatureHigh,
                'tempLow':res.data.daily.data[x].temperatureLow,
                'precipType':res.data.daily.data[x].precipType
            });
        }
        return weatherArray;
    })
}

module.exports = {
    darkSky
}