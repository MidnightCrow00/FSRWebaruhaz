import React, { useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'

export default function TermekAdminSor(props) {

    const {szerkesztes, torles} =useContext(AdminContext);


  return (
    <tr>
        <td>{props.obj.title}</td>
        <td><img src={props.obj.image} alt="termek" style={{ width: '100%' }}></img></td>
        <td>{props.obj.description}</td>
        <td>{props.obj.title}</td>
        <td><button type="button" className="btn btn-success" onClick={szerkesztes}>Szerkeszt</button></td>
        <td><button type="button" className="btn btn-danger" onClick={torles}>Töröl</button></td>
    </tr>
  )
}