import React, { useState } from 'react';

import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"
import { MapWrapper } from './GoogleMap.styled';
import searchClientBack from '../../images/search-icon.svg';


export default function GoogleMapLocationBracelet({props}) {
    let center = {lat:props.coordinatesX, lng: props.coordinatesY}
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    })
        const[map,setMap] = useState(/** @type google.maps.Map */(null));
        
    if(!isLoaded){
        return <h1>LOADING..</h1>
    };

    return(
        <MapWrapper>
            <GoogleMap center={center}
             zoom={16}
             options= {{
                streetViewControl: false,
                mapTypeControl: false
             }}
             onLoad = {(map)=>setMap(map)}
             mapContainerStyle={{width: "100%",height: "100%"}}>

            <Marker position={center}/>
            </GoogleMap>
            <button className='backToClientbtn' onClick={()=>map.panTo(center)}><img src={searchClientBack} alt="search icon" style={{width:"1em"}}/> Go Back</button>
        </MapWrapper>
    );

}
