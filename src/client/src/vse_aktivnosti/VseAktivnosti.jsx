import React, { useState, useEffect } from 'react'
import BackendService from '../services/backend-service'

function VseAktivnosti() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    try {
      BackendService.fetchAllActivities().then(
        response => {
          console.log(response.data)
          setActivities(response.data)
        },
        error => {
          console.log(error.response)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

  const formatDate = dateString => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('sl-SI', options)
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vse aktivnosti</h2>
      <div className="card mb-3">
        <div className="card-body">
          {activities.map((aktivnost, index) => (
            <div key={index} className="card mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Ime uporabnika: {aktivnost.uporabnik_ime}
                </h4>
                <p className="card-subtitle text-muted">
                  {formatDate(aktivnost.datum)}
                </p>
              </div>
              <div className="card-body">
                <h5 className="card-text">Aktivnost: {aktivnost.ime}</h5>
                <p className="card-text">Kalorije: {aktivnost.energija} kcal</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VseAktivnosti
