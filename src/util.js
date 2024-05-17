import { SERV, GAME_URL, JACKPOT_URL, APP_URL, MATH_URL } from "./constants"
import axios from "axios"

export const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
// API functions
export const addMath = (newMath) => {
    return axios.post(`http://localhost:3001/maths`, newMath)
    
    .then(response => console.log(response.data))
    .catch((error) => {
        console.error('Error adding math:', error);
    })
}

export const getMath = () => {
    return axios.get(`http://localhost:3001/maths`)
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
export const getMathById = () => {
    return axios.get(`http://localhost:3001/maths/2`)
    .then(response => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
}