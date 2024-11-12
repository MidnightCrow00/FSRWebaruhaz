import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';

export default function TermekAdminSor(props) {
  const { termekLista, setTermekLista } = useContext(ApiContext);

  const torles = () => {
    const updatedList = termekLista.filter(item => item.id !== props.obj.id);
    setTermekLista(updatedList); 
  };

  
  const szerkesztes = () => {

    console.log("Szerkesztés: ", props.obj);

  };

  return (
    <tr>
        <td>{props.obj.title}</td>
        <td><img src={props.obj.image} alt="termek" style={{ width: '100%' }} /></td>
        <td>{props.obj.description}</td>
        <td>{props.obj.title}</td>
        <td><button type="button" className="btn btn-success" onClick={szerkesztes}>Szerkeszt</button></td>
        <td><button type="button" className="btn btn-danger" onClick={torles}>Töröl</button></td>
    </tr>
  );
}
