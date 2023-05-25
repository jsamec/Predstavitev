import axios from 'axios'
import { SERVER_URL } from '../config'

const signup = data => {
  return axios
    .post(`${SERVER_URL}/uporabniki/api/register`, {
      data
    })
    .then(response => {
      return response.data
    })
}

const login = payload => {
  return axios
    .post(`${SERVER_URL}/uporabniki/api/login`, {
      payload
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const authService = {
  signup,
  login,
  logout,
  getCurrentUser
}

export default authService
