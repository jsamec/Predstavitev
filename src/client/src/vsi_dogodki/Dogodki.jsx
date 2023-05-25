import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackendService from '../services/backend-service'

function Dogodki() {
  const [events, setEvents] = useState([])
  const [appliedEvents, setAppliedEvents] = useState([])

  useEffect(() => {
    try {
      BackendService.fetchEvents().then(
        response => {
          console.log(response.data)
          setEvents(response.data)
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

  const handleApply = eventId => {
    // Apply to the specified event by sending a request to the server or API
    BackendService.applyEvent(eventId)
      .then(response => {
        setAppliedEvents(appliedEvents => [...appliedEvents, eventId])
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dogodki</h2>
      {events.map(event => (
        <div
          className="card shadow-lg p-3 mb-5 bg-body rounded"
          key={event.id_dogodka}
        >
          <h3>{event.ime}</h3>
          <p>{formatDate(event.datum)}</p>
          <p>{event.lokacija}</p>
          <p>{event.opis}</p>
          {appliedEvents.includes(event.id_dogodka) || event.je_prijavil ? (
            <p>Prijavili ste se na ta dogodek</p>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => handleApply(event.id_dogodka)}
              id={event.id_dogodka}
            >
              Prijavi me
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Dogodki
