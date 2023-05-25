import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { SERVER_URL } from '../config'
import AuthService from '../services/auth-service'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    // Handle form submission here
    const data = {
      firstName,
      lastName,
      email,
      password
    }
    try {
      await AuthService.signup(data).then(
        response => {
          navigate('/prijava')
          window.location.reload()
        },
        error => {
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <h2 className="text-center mb-4">Ustvari račun</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Ime
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Priimek
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Geslo
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registriraj me
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
