import { createContext } from "react";

export const AdminContext=createContext("");
export const AdminProvider=({children})=>{

    const [adminLista, setAdminLista] = useState([]);

    return(
        <AdminContext.Provider value={{szerkesztes, torles}}>
            {children}
        </AdminContext.Provider>
    )

}