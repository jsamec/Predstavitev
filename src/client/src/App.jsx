import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import VseAktivnosti from './vse_aktivnosti/VseAktivnosti'
import RegisterR from './registracija/RegistracijaR'
import LoginR from './prijava/LoginR'
import AuthService from './services/auth-service'
import SledilnikPrehraneR from './sledilnik_prehrane/SledilnikPrehraneR'
import OrganizacijaR from './organizacija_dogodka/OrganizacijaR'
import DogodkiR from './vsi_dogodki/DogodkiR'
import LestvicaR from './lestvica/LestvicaR'
import SpanecR from './spanec/SpanecR'
import AktivnostiR from './aktivnosti/AktivnostiR'
import LestvicaAPI from './jymbud_api/Lestvica'
import UporabnikAPI from './jymbud_api/Uporabnik'

function App() {
  
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const user = AuthService.getCurrentUser()
      if (user) {
        try {
          const userData = await AuthService.getUserData()
          setCurrentUser(userData)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchData()
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="ms-2 d-flex w-100 align-items-center">
          <Link to={'/'} className="navbar-brand p-3">
            JymBud
          </Link>
          <ul className="ms-auto d-flex">
            {currentUser ? (
              <li className="nav-item text-white p-2">
                <a href="/prijava" className="nav-link" onClick={logOut}>
                  Odjava
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item text-white p-2">
                  <Link to={'/prijava'} className="nav-link">
                    Prijava
                  </Link>
                </li>

                <li className="nav-item text-white p-2">
                  <Link to={'/registracija'} className="nav-link">
                    Registracija
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className="d-flex">
        {currentUser && (
          <>
            <nav
              id="side-nav"
              className="navbar navbar-dark bg-dark flex-column p-5 pt-3  min-vh-100 col-1.8 "
            >
              <div className="navbar-nav">
                <Link to={'/sledilnik_prehrane'} className="nav-link">
                  Sledilnik prehrane
                </Link>

                <Link to={'/lestvica'} className="nav-link">
                  Lestvica
                </Link>

                <Link to={'/spanec'} className="nav-link">
                  Spanec
                </Link>

                <Link to={'/aktivnosti'} className="nav-link">
                  Moje aktivnosti
                </Link>

                {currentUser.status === 'influencer' && (
                  <Link to={'/dodaj-dogodek'} className="nav-link">
                    Dodaj dogodek
                  </Link>
                )}

                <Link to={'/vsi-dogodki'} className="nav-link">
                  Vsi dogodki
                </Link>
              </div>
            </nav>
          </>
        )}

        <div className="container mt-3">
          <Routes>
            
            <Route path="/" element={<VseAktivnosti />} />
            <Route path="/registracija" element={<RegisterR />} />
            <Route path="/prijava" element={<LoginR />} />
            <Route
              path="/sledilnik_prehrane"
              element={<SledilnikPrehraneR />}
            />
            {currentUser && currentUser.status === 'influencer' && (
              <Route path="/dodaj-dogodek" element={<OrganizacijaR />} />
            )}
            <Route path="/vsi-dogodki" element={<DogodkiR />} />
            <Route path="/lestvica" element={<LestvicaR />} />
            <Route path="/spanec" element={<SpanecR />} />
            <Route path="/aktivnosti" element={<AktivnostiR />} />
            <Route
              path="/aktivnosti/top-uporabniki"
              element={<LestvicaAPI />}
            />
            <Route path="/uporabnik/:id" element={<UporabnikAPI />} />
            <Route path='/health' element={<h1>Hello</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
