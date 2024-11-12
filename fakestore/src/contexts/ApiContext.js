import {createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista] = useState([])
    const [katLista, setKatLista] = useState([])

    const getAdat = async (vegpont,callbackfv)=>{
        try{
            const response = await myAxios.get(vegpont);
            console.log(response)
            callbackfv(response.data)
        }catch(err){
            console.log("Hiba történt az adatok lekérésekor.")
        }finally{

        }
    };
    const postAdat = async (vegpont, adat)=>{
        try{
            const response = await myAxios.post(vegpont, adat);
            console.log(response)
        }catch(err){
            console.log("Hiba történt az adatok küldésekor.")
        }finally{

        }
    };
    useEffect(()=>{
        getAdat("/products",setTermekLista)
        getAdat("/products/categories",setKatLista)
    },[]);
    return(
        <ApiContext.Provider value={{termekLista, postAdat}}>
            {children}
        </ApiContext.Provider>
    );
}