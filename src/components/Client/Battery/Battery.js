import React from "react";
import { BatteryWrapper } from "./Battary.styled";

//Client({name,surname,bracletData,simConnection,coordinatesX,coordinatesY,battery})
export default function Battery({battery}) {
    const showStatus = (batteryInp) => {
        const batteryStatus =   parseInt(batteryInp);
        if (batteryStatus === 100){
            return  ["Full","white"]
        }
        else if(batteryStatus < 100 && batteryStatus >= 80){
            return ["High", "green"]
        }
        else if(batteryStatus < 80 && batteryStatus >= 40){
            return ["Medium","yellow"]
        }
        else if(batteryStatus < 40 && batteryStatus >= 20){
            return ["Low","orange"]
        }
        else if(batteryStatus < 20 && batteryStatus >= 0){
            return ["Very low","red"]
        }
        else {
            return ["Unknown","white"]
        }
    }
    
    const [status, batteryColor] = showStatus(battery);
    return (
        <BatteryWrapper color = {batteryColor} batteryPers={parseInt(battery)} >        
            
            <h3>Power</h3>

            <div className="batteryContainer">
                <div className="insidebattery">
                    <div className="statusFillage" style={
                          battery === 100 
                          ? {clipPath: 'polygon(0% 0%, 94% 0%, 94% 20%, 100% 20%, 100% 80%, 94% 80%, 94% 100%, 0% 100%)', color: "black"} 
                          : {clipPath :'polygon(0% 0%, 94% 0%, 94% 100%, 0% 100%)', color:  "white"}
                    }
                    > {battery}% </div>
                </div>
            </div>
            
            <p>Status: <span style={{color:batteryColor}}>{status}</span></p>
        </BatteryWrapper>
    );
};