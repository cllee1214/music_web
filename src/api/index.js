import axios from 'axios'

function getBanner() {
    return axios.get('/banner')
}

function getHotListCategory() {
    console.log('getHostlist')
    return axios.get('/playlist/hot')
}
function getPersonalized(limit) {
    return axios.get('/personalized?limit=' + limit)
}
export {
    getBanner,
    getHotListCategory,
    getPersonalized
}