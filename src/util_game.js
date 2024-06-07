import axios from "axios"

// API functions
// Adding Record
export const addGame = (newGame) => {
    return axios.post(`http://localhost:3001/games`, newGame)
    
    .then(response => console.log(response.data))
    .catch((error) => {
        console.error('Error adding game:', error);
    })
}

// Getting Record
export const getGame = () => {
    return axios.get(`http://localhost:3001/games`)
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
export const getGameById = () => {
    return axios.get(`http://localhost:3001/games/2`)
    .then(response => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    })
}