import { useEffect, useState } from 'react';
import './css/style.css';

const Weather = () => { 
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Gurgaon");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fc3b08cbd9c575616ab9199bf2d7d9ef&units=metric`;

    useEffect(()=>{
            const fetchApi = async() => {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setCity(data.main);
            }
        fetchApi();
    },[search])

    return (
        <>
        <div className='container'>
        <div className='box'>
            <div className='search'>
                <input type='text' onChange={(e)=>{setSearch(e.target.value)}} placeholder='Enter City'/>
            </div>
            {!city ? (<p className='no-data'>No data found</p>) : 
                (<>
                <div className='location'>   
                <h1><i className="fa-solid fa-street-view"></i>{search}</h1>
            </div>
            <div className='temp-info'>
                <div className='temprature'>
                    <h2>{Math.floor(city.temp)}°C</h2>
                </div>
                <div className='temp-range'>
                    <p>Min : {city.temp_min}°C | Max : {city.temp_max}°C</p>
                </div>
            </div>
            <div className='wave one'></div>
        <div className='wave two'></div>
        <div className='wave three'></div>
                </>)
            }

        </div>
        </div>
        </>
    )
}

export default Weather;