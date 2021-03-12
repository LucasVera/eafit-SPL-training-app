import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="jumbotron medical-app-bg-cover">
        <h1 className="mb-5">Terapias médicas</h1>
        <p className="lead mt-5">Realiza tus terapias de recuperación sin salir de casa, con guía profesional y contenido de calidad</p>
        <hr className="my-5" />
        <p className="lead mb-5">
          <Link className="btn btn-primary btn-lg" to="/sign-in">Ingresar</Link>
        </p>
      </div>
    </div>
  )
}
