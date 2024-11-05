import {createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista] = useState([])

    const vegpont = "https://fakestoreapi.com"
    const getAdat = async (vegpont)=>{
        try{
            const response = await myAxios.get(vegpont);
            console.log(response)
            setTermekLista(response.data)
        }catch(err){
            console.log("Hiba törttént az adatok lekérésekor.")
        }finally{

        }
    };
    useEffect(()=>{
        getAdat("/products")
    },[]);
    return(
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
    );
}