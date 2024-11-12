import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";

export default function () {
    const {postAdat}=useContext(ApiContext)
    /* Az ürlapokhoz tartozik egy saját state, itt fojuk tárolni az ürlapmezö adatait */
    const[adat,setAdat]=useState({
        title:"Ez a termék neve",
        price:'1000',
        category:'',
        description:'leiras',
        image:''
    })
    
    function valtoztatasKezeles(event){
        /* A az inputba beírt adatokkal kell frissiteni az objektumunkkat */
        const sObj={...adat}
        sObj[event.target.id]=event.target.value
        setAdat({...sObj})
    }
    function elkuld(event){
        /* le szedjük az alap értelmezet eseménykezelöt */
        event.preventDefault()
        /* Össze gyüjtjük az adatokat az ürlap mezöböl és összeállitunk egy objektumot
        Ezt az objektumot küljük el a Post kéréssel a végpontra */
        console.log("elküld",adat)
        postAdat('/products', adat)
    }

  return (
    <div>
      <form onSubmit={elkuld}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            A termék neve
          </label>
          <input type="text" className="form-control" id="title" aria-description="titleHelp" value={adat.title} onChange={valtoztatasKezeles}/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            A termék ára
          </label>
          <input
            type="number"
            min="1000"
            max="10000000"
            className="form-control"
            id="price"
            value={adat.price} onChange={valtoztatasKezeles}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            A termék leírása
          </label>
          <textarea
            className="form-control"
            value={adat.description} rows="3" onChange={valtoztatasKezeles} id="description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
