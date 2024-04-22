import axios from "axios";
import { createContext } from "react";

export  let AllListContext = createContext();
// monthly|yearly|weekly|daily
function getAll(){
    const api = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: '5002,6020,7766,6698,6858,9771',
          purpose: 'for-rent',
          hitsPerPage: '25',
          page: '0',
          lang: 'ar',
          sort: 'city-level-score',
          rentFrequency: 'monthly',
          categoryExternalID: '4'
        },
        headers: {
          'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
      };
    return axios.request(api).then((response)=>response).catch((error)=>error);
}

function getYearly(){
    const api = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: '5002,6020',
          purpose: 'for-rent',
          hitsPerPage: '25',
          page: '0',
          lang: 'ar',
          sort: 'city-level-score',
          rentFrequency: "yearly",
          categoryExternalID: '4'
        },
        headers: {
          'X-RapidAPI-Key': '6e18a4a4b3msh2b649b53e569ad2p174fedjsn6011aa4ed598',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
      };
    return axios.request(api).then((response)=>response).catch((error)=>error);
}

function roome(){
    const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: '5002,6020',
          purpose: 'for-rent',
          hitsPerPage: '25',
          page: '0',
          lang: 'en',
          sort: 'city-level-score',
          categoryExternalID: '4',
          // priceMin: '1000',
          // priceMax: '50000',
          // roomsMin: '2',
          // roomsMax: '3',
          // bathsMin: '3',
          // bathsMax: '3'
        }
}
}

export default function AllListProvider(props) {


    return <AllListContext.Provider value={{getAll,getYearly}}>
        {props.children}
    </AllListContext.Provider>
  }