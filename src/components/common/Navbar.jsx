import React from 'react'
import './common.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary p-4">
  <div className="container">
    <a className="navbar-brand fw-bold" href="#">My PortFolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
        <button className="btn btn-success ms-5" type="submit">Download Resume</button>

        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>
  )
}
