import axios from 'axios'

export default axios.create({
    baseURL: 'https://task-manager-react-744c3-default-rtdb.firebaseio.com/'
})