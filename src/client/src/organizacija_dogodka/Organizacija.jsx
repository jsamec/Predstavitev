import axios from 'axios'
import React, { useState } from 'react'
import { SERVER_URL } from '../config'
import BackendService from '../services/backend-service'
import { useNavigate } from 'react-router-dom'

function Organizacija() {
  const [ime, setIme] = useState('')
  const [datum, setDatum] = useState('')
  const [lokacija, setLokacija] = useState('')
  const [opis, setOpis] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const eventData = {
      ime,
      datum,
      lokacija,
      opis
    }
    console.log(eventData)
    createEvent(eventData)
  }
  const navigate = useNavigate()
  async function createEvent(eventData) {
    try {
      BackendService.createEvent(eventData)
      navigate('/vsi-dogodki')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <h2 className="text-center mb-4">Organiziraj dogodek</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ime" className="form-label">
              Ime dogodka
            </label>
            <input
              type="text"
              className="form-control"
              id="ime"
              value={ime}
              onChange={e => setIme(e.target.value)}
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
              onChange={e => setDatum(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lokacija" className="form-label">
              Lokacija
            </label>
            <input
              type="text"
              className="form-control"
              id="lokacija"
              value={lokacija}
              onChange={e => setLokacija(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="opis" className="form-label">
              Opis
            </label>
            <textarea
              className="form-control"
              id="opis"
              value={opis}
              onChange={e => setOpis(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Ustvari dogodek
          </button>
        </form>
      </div>
    </div>
  )
}

export default Organizacija
