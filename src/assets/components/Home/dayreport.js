import React from "react";
import locationimg from "../../images/location.png";
import sunrise from "../../images/sunrise.png";
import sunset from "../../images/sunset.png";
import clearsky from "../../images/clearsky.png"
import moment from "moment";

export default function Dayreport({data}){
    // -273.15
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[new Date().getDay()];
    return(
        <>
         <div className="location-container">
            <img src={locationimg} className="location__img"/>
            <p>{data?.name} , {data?.sys?.country}</p>
        </div>

        <div className="forecast-img__container">
            <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} className="forecast-img"/>
            <p>
            {data?.weather[0]?.description}
            </p>
        </div>

        <div>
        <p>
           {data ?  Number((data.main.temp - 273.15).toFixed(2)) : "0" } c
        </p>
        <div>

        <img src=""/>
      <p>
       {new Date().toLocaleDateString()} {day}
      </p>
<p>
{new Date().toLocaleTimeString()}
</p>
        </div>

        </div>

       <p>
        feels like 36 c clouds
       </p>

<div className="sunrise-container">
    <div>
        <img src ={sunrise}/>
        <p>
     {
    //  moment(data?.sys?.sunrise).utc.valueo
    //  moment(data?.sys?.sunrise).valueOf()
   
    new Date(data?.sys?.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      }
        </p>

    </div>
    <div>
        <img src ={sunset}/>
        <p>
        {
    //  moment(data?.sys?.sunset)
    // moment(data?.sys?.sunset).valueOf()
    // (new Date(data?.sys?.sunset).toLocaleTimeString("en-US"))
    new Date(data?.sys?.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
     }
        </p>
        
    </div>
</div>
        </>
    )
}