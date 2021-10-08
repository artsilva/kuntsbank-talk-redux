import axios from 'axios'

export const getUserList = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
