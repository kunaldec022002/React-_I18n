import React, { useState } from "react";
import './Home.css'
import I18n from "../../utils/i18n";

function Home()
{
  

    
    return(
        <div>
            <h1>{I18n("welcomeMessage")}</h1>

            <p>
                {I18n("greetingMessage")}
            </p>

            <h3>{I18n("normalMessage")}</h3>

            <h5>{I18n("endMessage")}</h5>
            <select  className="select-text"
             defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem ("lang", e.target.value);
                window.location.reload();
            }}>
                <option value="mr">Marathi</option>
                <option value="en">English</option>
                <option value="hin">Hindi</option>
            </select>

            
        </div>
    )
}

export default Home