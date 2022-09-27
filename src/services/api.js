import axios from "axios";

const baseURL = "https://deckofcardsapi.com/api/deck"


export const api = axios.create({
    baseURL,
timeout:10000,
})