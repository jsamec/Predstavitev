import React, { useState, useEffect } from 'react'
import backendService from '../services/backend-service'

function Aktivnosti() {
  const [ime, setIme] = useState('')
  const [energija, setKcalories] = useState('')
  const [datum, setDate] = useState('')
  const [activities, setActivities] = useState([])

  useEffect(() => {
    try {
      backendService.fetchOwnActivities().then(
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

  const handleFormSubmit = event => {
    event.preventDefault()
    const activityData = {
      ime,
      energija,
      datum
    }

    backendService.createActivity(activityData).then(() => {
      setIme('')
      setKcalories('')
      setDate('')
      setActivities([...activities, { ime, energija, datum }])
    })
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sledilnik aktivnosti</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="ime" className="form-label">
            Ime
          </label>
          <input
            type="text"
            className="form-control"
            id="ime"
            value={ime}
            onChange={event => setIme(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="energija" className="form-label">
            Kalorije
          </label>
          <input
            type="number"
            className="form-control"
            id="energija"
            value={energija}
            onChange={event => setKcalories(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="datum" className="form-label">
            Datum
          </label>
          <input
            type="date"
            className="form-control"
            id="datum"
            value={datum}
            onChange={event => setDate(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Dodaj aktivnost
        </button>
      </form>
      <hr />
      <h3>Moje aktivnosti</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ime</th>
            <th scope="col">Kalorije (kcal)</th>
            <th scope="col">Datum</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((aktivnost, index) => (
            <tr key={index}>
              <td>{aktivnost.ime}</td>
              <td>{aktivnost.energija}</td>
              <td>{formatDate(aktivnost.datum)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Aktivnosti
