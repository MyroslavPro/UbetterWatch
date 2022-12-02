import React from "react";
import { BatteryWrapper } from "./Battary.styled";

//Client({name,surname,bracletData,simConnection,coordinatesX,coordinatesY,battery})
export default function Battery({battery}) {

    return (<BatteryWrapper>
        <h4>Battery {battery}%</h4>
        {/* <div className="batteryStatus" style={
            {
                background: `linear-gradient(to left, red,red ${battery}% , #eee ${battery}%, #black 100)`, borderRadius: '1em'
            }
            }></div> */}
        </BatteryWrapper>
    );
};