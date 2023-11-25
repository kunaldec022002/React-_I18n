import React from "react";
import './Home.css'
import I18n from "../../utils/i18n";

function Home()
{
    const usersCount = 15;
    return(
        <div>
            <h1>{I18n({lang : "hin", keyword: "welcomeMessage"})}</h1>

            <p>
                {I18n({lang:"hin", keyword:"greetingMessage"})}
            </p>

            <h3>{I18n({lang:"hin", keyword:"normalMessage"})}</h3>

            <p>
                {usersCount} are learning in this session.
            </p>
        </div>
    )
}

export default Home