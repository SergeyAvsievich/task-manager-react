import axios from 'axios'

export default axios.create({
    baseURL: 'https://task-manager-d764e-default-rtdb.europe-west1.firebasedatabase.app/'
})