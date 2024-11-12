import React, { useContext } from 'react'
import TermekAdminSor from './TermekAdminSor';
import { ApiContext } from '../contexts/ApiContext';

export default function TermekAdmin() {

    const { termekLista } = useContext(ApiContext); 

  return (
    <>
    <div className='row'>
    {termekLista.map((elem, index) => {
            return <TermekAdminSor obj={elem} key={index} />;
        })}
    </div>
    </>
  )
}

