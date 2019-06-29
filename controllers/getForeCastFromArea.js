const {geoLocation} = require('./geoLocation');
const {darkSky} = require('./darkSky');


const getForeCastFromArea = async (areaCode)=>{
    const location = await geoLocation(areaCode);
    const foreCastData = await darkSky(location[0],location[1]);
    return foreCastData;
}


module.exports = {
    getForeCastFromArea
}