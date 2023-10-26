import axios from "axios";

axios.defaults.withCredentials = true;

const BASE_URL_LOCAL = import.meta.env.VITE_BJ_API_URL;

const gameEndpoints = {
        startGame : () => axios.get(`${BASE_URL_LOCAL}/start`, {
                headers: {"Access-Control-Allow-Origin": "*"}
        }),
        getGameDetails : (gameId) => axios.get(`${BASE_URL_LOCAL}/${gameId}`),
        dealerHit : (gameId) => axios.get(`${BASE_URL_LOCAL}/${gameId}/d-hit`),
        playerHit : (gameId) => axios.get(`${BASE_URL_LOCAL}/${gameId}/hit`),
        playerStand: (gameId) => axios.get(`${BASE_URL_LOCAL}/${gameId}/stay`),

}

export default gameEndpoints;