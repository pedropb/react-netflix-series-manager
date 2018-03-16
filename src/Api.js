import axios from 'axios'

export const endpoint = axios.create({
    baseURL: "http://localhost:3001"
})

const Api = {
    loadGenres: () => endpoint.get("/genres"),
    loadSeries: () => endpoint.get("/series")
}

export default Api