import { useState } from 'react'
import authService from '../services/auth-service'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    // Handle login submission here
    const payload = {
      email,
      password
    }

    try {
      await authService.login(payload).then(
        () => {
          navigate('/')
          window.location.reload()
        },
        error => {
          console.log(error)
        }
      )
    } catch (error) {}
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email naslov
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
            Prijava
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
