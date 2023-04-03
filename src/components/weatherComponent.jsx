import React from "react";
import Card from 'react-bootstrap/Card';

function CardWeather({weatherData}){

    
    return (
        <>
        
       
            {
               weatherData && 
                    
                        <>
                         <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <p>Date: { (new Date()).toJSON().slice(0, 10)} </p>
                                    <p>City Name: {weatherData.name}</p>
                                    <p>Temprature: {weatherData.main.temp} &deg;C</p>
                                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                    <p>Description: {weatherData.weather[0].main}</p>
                                    <p>Humidity: {weatherData.main.humidity} %</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            
                        </>
                    
                }
        </>
    )
     
    
}


export {
    CardWeather,
}