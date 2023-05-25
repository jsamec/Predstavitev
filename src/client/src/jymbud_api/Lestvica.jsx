import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackendService from '../services/backend-service'

function LestvicaAPI() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        BackendService.fetchLeaderboard().then(
          response => {
            console.log(response.data)
            setData(response.data)
          },
          error => {
            console.log(error.response)
          }
        )
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default LestvicaAPI
