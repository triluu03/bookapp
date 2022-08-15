import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/books'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

// Setting token for creating new books
let token = null
const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const create = async (newObject) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const bookService = { getAll, create, setToken }
export default bookService