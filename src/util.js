import { BASE_URL, GAME_URL, JACKPOT_URL, APP_URL, MATH_URL } from "./constants"
import axios from "axios"

export const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// API functions
