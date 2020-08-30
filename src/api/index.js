import axios from 'axios'

function getBanner() {
    return axios.get('/banner')
}

export {
    getBanner
}