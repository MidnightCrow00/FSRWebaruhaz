import Termek from './Termek'
import React from 'react';

export default function Vasarloter(props) {
    
  return (
    <>
    <div>
      {props.termekLista.map((elem, index) => {
        return <Termek key={index} termek={elem} />;
      })}
    </div>
    </>
  )
}
