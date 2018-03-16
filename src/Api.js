import axios from 'axios'


const baseURL = ""
export const endpoint = axios.create({
    baseURL: "http://localhost:3001"
})

const Api = {
    loadGenres: () => endpoint.get("/genres")
}

export default Api