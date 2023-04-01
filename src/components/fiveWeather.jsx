import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFiveWeather({weatherData}){

   function cardse() {
     if (weatherData) {
             return  weatherData.map((item,index)=>{

                 if(index % 2 == 0 ){
                       
                    return (<>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    <p>Date: {item.dt_txt} </p>
                                    <p>Temprature: {item.main.temp} &deg;C</p>
                                    <p>description: {item.weather.description} &deg;C</p>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>)
                }
             });                    
                        
     
        }
    }
  
    return (
        <>
            {
              cardse()        
            }
        </>
    )
     
    
}


export {
    CardFiveWeather,
}