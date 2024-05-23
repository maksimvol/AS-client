import { SERV, GAME_URL, JACKPOT_URL, APP_URL, MATH_URL } from "./constants"
import axios from "axios"

export const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
// API functions
// Adding Record
export const addApp = (newApp) => {
    // console.log("client", newApp)
    return axios.post(`http://localhost:3001/apps`, newApp)
    
    .then(response => console.log(response.data))
    .catch((error) => {
        console.error('Error adding app:', error);
    })
}

// Getting Record
export const getApp = () => {
    return axios.get(`http://localhost:3001/apps`)
    .then(response => {
        console.log(response.data)
        if(response.status === 200) {
            return response.data;
        } else {
            console.log("Can Not Get Data")
        }
    })
    .catch((error) => {
        console.log(error);
    })
}

// Getting Record by Id
export const getAppById = () => {
    return axios.get(`http://localhost:3001/apps/2`)
    .then(response => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
}