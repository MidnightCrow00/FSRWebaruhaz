import React from 'react';

export default function Termek({ termek }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={termek.image}
        alt={termek.title}
        className="card-img-top"
        style={{ width: '60%', height: 'auto', borderRadius: '8px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ fontSize: '20px' }}>{termek.title}</h5>
        <p className="card-text text-muted" style={{ fontSize: '15px' }}>{termek.description}</p>
        <p className="card-text font-weight-bold" style={{ fontSize: '20px' }}>Ár: {termek.price} Ft</p>
        <p className="card-text" style={{ fontSize: '15px' }}>Darabszám: {termek.rating.count}</p>
        <a href="#" className="btn btn-primary btn-sm mt-auto">Kosárba tesz</a>
      </div>
    </div>
  );
}
