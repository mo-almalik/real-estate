import axios from "axios";
import { createContext } from "react";

export let PropertiesContext = createContext();

const forRent ='https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=ar&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
const   headers ={
  'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }


  function getPropertis(){
    return axios.get(forRent,{headers}).then((response)=>response).catch((error)=>error)
  }


 
  export default function PropertiesContextProvider(props) { 


  
        return <PropertiesContext.Provider value={{getPropertis }}>
            {props.children}
        </PropertiesContext.Provider>
   }
