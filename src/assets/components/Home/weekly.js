import React from "react";
import clearsky from "../../images/clearsky.png"

export default function Weekly(){
    return(<>
     <div className="weekly-container__card">
            <p>
                fri,14 Apr
            </p>
            <div className="temperature-container__details">

            <p>
33 c
            </p>
       <img src={clearsky}  className="weekly-container__img"/>
       
            </div>

<p>
    overcast cloud
</p>

        </div>
    </>)
}