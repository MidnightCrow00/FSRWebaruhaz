import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext';
import TermekAdminSor from './TermekekAdminSor';

export default function TermekAdmin() {

    const { termekLista } = useContext(ApiContext); 

  return (
    <>
    <div className='row'>
    {termekLista.map((elem, index) => {
            return <TermekAdminSor obj={elem} key={index}  />;
        })}
    </div>
    </>
  )
}

