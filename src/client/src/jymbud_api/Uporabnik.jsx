import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackendService from '../services/backend-service'

function UporabnikAPI() {
  const [data, setData] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BackendService.fetchUserActivities(id)
        console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.error(error.response)
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default UporabnikAPI
