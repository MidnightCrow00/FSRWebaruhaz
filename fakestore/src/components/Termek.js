import React from 'react'

export default function Termek ({termek}) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={termek.image} alt={termek.title} className="card-img-top" />
        <h3 className="card-title">{termek.title}</h3>
      </div>
      <p className="card-text">{termek.description}</p>
      <p className="card-text"><strong>Ár: {termek.price} Ft</strong></p>
      <p className="card-text"><strong>Darabszám: {termek.rating.count}</strong></p>
      <a className="btn btn-primary">Kosárba tesz</a>
    </div>
  )
}
