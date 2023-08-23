const request = require('request');

const forecast =(latitude,longitude,callback) =>{
    const url ="http://api.weatherstack.com/current?access_key=5e7064c57968742c633103a8a24cc494&query="+latitude+","+longitude;

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to the weather services!!!',undefined);
        } else if(body.error){
            callback('Unable to find location',undefined);
        } else {
            callback(undefined,
                'It is currently '+body.current.temperature+' degrees. It feels like '+body.current.feelslike+' degrees out.'
            )
        }
    })
};




module.exports = forecast;