import React from "react";
import { getCurrentPosition, weather,API_key} from "../service/geo"; import "../service/geo"
import { CardWeather } from './weatherComponent';
import { CardFiveWeather } from './fiveWeather';
import { useEffect, useState } from "react";

function MainWeather(params) {

    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [data, setData] = useState(null);
    const [url, setUrl] = useState();
    const [url2, setUrl2] = useState();
    
    useEffect(()=>{
        getCurrentPosition([setLat, setLong]);

    },[])
   
    
  
    useEffect( () => {
         
       setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_key}`);
       setUrl2(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_key}`);
           
    }, [lat,long])
    
  
    function oneDate(){
        weather( url,[setData]);
    }
    function oneFive(){
        weather( url2,[setData]);
    }

    function cards(){
        if (data) {
            if(data.list)
                return  <CardFiveWeather weatherData={data.list}></CardFiveWeather>
            return  <CardWeather weatherData={data}></CardWeather>
            
        }
    }
    return (
        <>
                <h1>{lat}, {long}</h1>
                {
                    data &&  cards() 
                        
                }
                <button onClick={oneDate}> Get wather current</button>
                <button onClick={oneFive}> Get wather five</button>

        </>
    );

}

export {
    MainWeather
}