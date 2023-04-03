import axios from 'axios';


const API_key = process.env.REACT_APP_SECRET_NAME;


function weather(url, args){
    let [setData] = args;  
    axios.get(url).then(res => setData(res.data));
   
}


function  getCurrentPosition(args){
    const [setlat, setlon] = args;
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            setlat(position.coords.latitude);
            setlon(position.coords.longitude);
        });
      } else {
        throw "местоположение НЕ доступно";
      }
   
}

export {
    getCurrentPosition,
    weather,
    
    API_key,
};