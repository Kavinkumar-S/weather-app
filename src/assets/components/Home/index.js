import React, { useEffect } from "react";

import Weekly from "./weekly";
import Dayreport from "./dayreport";
import humidity from "../../images/humidity.png";
import pressure from "../../images/pressure.png";
import thermometer from "../../images/thermometer.png";
import eye from "../../images/eye.png";
import wind from "../../images/wind.png";
import dew from "../../images/dew.png";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Index(){

    const [day,setDay] = useState();
    const [location,setLocation] = useState("chennai");
    const [weekdata,setWeekdata] = useState("chennai")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLocation(data?.location);
    };


    useEffect(()=>{
        getweatherdata()
    },[location])
    
    const getweatherdata =async()=>{
        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f277f5d2d4978213d13a6af7f4cf2d0c`)
            // console.log("console response",response.data);  
            let weekresponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=f277f5d2d4978213d13a6af7f4cf2d0c`)
            setDay(response.data);  
            setWeekdata(weekresponse.data);    
  
        } catch (error) {
            console.log("error",error)
        }
      }

      console.log("day-response",day);
      console.log("week-response",weekdata)


    return(<>
   
   <div className="container"> 
   <div className="row">
    <div className="day-container"> 

       <Dayreport data={day}/>
        
       <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={thermometer}/>
            <p>
                High <br/>/ Low
            </p>
            </div>
            
            <p>
            {Number((day.main.temp_max - 273.15).toFixed(2))}
        / 
            {Number((day.main.temp_min - 273.15).toFixed(2))}
            </p>
        </div>
        
        <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={humidity}/>
            <p>
                Humidity
            </p>
            </div>
            
            <p>
                {day?.main?.humidity} %
            </p>
        </div>
        <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={pressure}/>
            <p>
                pressure
            </p>
            </div>
            
            <p>{day?.main?.pressure} hPa
            </p>
        </div>
        <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={eye}/>
            <p>
                visibility
            </p>
            </div>
            
            <p>
            {(day?.visibility /1000) } Km
            </p>
        </div>
        <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={wind}/>
            <p>
                wind
            </p>
            </div>
            
            <p>
                {day.wind.speed} km/hr
            </p>
        </div>
        <div className="forecast-container">
            <div className="forecast-container__details">
            <img src={dew}/>
            <p>
dewpoints
            </p>
            </div>
            
            <p>
                30%
            </p>
        </div>


    </div>

        <div className="view-container">
        <div className="search-container">
        <h3 className="">
Weather ForeCasting
        </h3>   
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="search-form__input"  {...register("location")}/>
            <button className="searchform__btn">
                search
            </button>
        </form>

        </div>
        <div>
            <h3>
                Daily Forecast in chennai
            </h3>
        </div>

        <div className="weekly-container">
    
       <Weekly/>
       <Weekly/>  
       <Weekly/>  
      
        </div>


        </div>

   </div>

   </div>


    </>)
}