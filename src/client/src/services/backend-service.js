import axios from 'axios'
import authHeader from './auth-header'
import { SERVER_URL } from '../config'

const createEvent = eventData => {
  return axios
    .post(
      `${SERVER_URL}/dogodki/api/create`,
      { payload: eventData },
      {
        headers: authHeader()
      }
    )
    .then(alert('Uspešno ustvarjen dogodek'))
}

const fetchEvents = () => {
  return axios.get(`${SERVER_URL}/dogodki/api/fetchAll`, {
    headers: authHeader()
  })
}

const applyEvent = eventId => {
  console.log(eventId)
  return axios
    .post(
      `${SERVER_URL}/dogodki/api/${eventId}/apply`,
      {
        payload: []
      },
      {
        headers: authHeader()
      }
    )
    .then(alert('Prijavili ste se na dogodek'))
}

const fetchOwnActivities = () => {
  return axios.get(`${SERVER_URL}/aktivnosti/api/fetchOwn`, {
    headers: authHeader()
  })
}

const createActivity = activityData => {
  return axios
    .post(
      `${SERVER_URL}/aktivnosti/api/create`,
      { payload: activityData },
      {
        headers: authHeader()
      }
    )
    .then(alert('Uspešno ustvarjena aktivnost'))
}

const createFood = foodData => {
  return axios
    .post(
      `${SERVER_URL}/aktivnosti/api/create_hrana`,
      { payload: foodData },
      {
        headers: authHeader()
      }
    )
    .then(alert('Uspešno ustvarjena hrana'))
}

const fetchAllActivities = () => {
  return axios.get(`${SERVER_URL}/aktivnosti/api/fetchAll`, {
    headers: authHeader()
  })
}

const fetchLeaderboard = () => {
  return axios.get(`${SERVER_URL}/aktivnosti/api/getLeaderboard`, {
    headers: authHeader()
  })
}

const backendService = {
  createEvent,
  fetchEvents,
  applyEvent,
  fetchOwnActivities,
  createActivity,
  fetchAllActivities,
  createFood,
  fetchLeaderboard
}

export default backendService
