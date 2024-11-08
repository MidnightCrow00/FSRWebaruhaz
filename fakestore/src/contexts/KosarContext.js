import { createContext, useState } from "react";

export const KosarContext = createContext();

const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);

  const kosarhozAd = (termek) => {
    const termekIndex = kosarLista.findIndex((item) => item.id === termek.id);
    if (termekIndex >= 0) {
      const frissitettKosar = [...kosarLista];
      frissitettKosar[termekIndex].darabszam += 1; 
      setKosarLista(frissitettKosar);
    } else {
      setKosarLista([...kosarLista, { ...termek, darabszam: 1 }]);
    }
  };

  const kosarbolEltavolit = (termek) => {
    const frissitettKosar = kosarLista.filter(item => item.id !== termek.id);
    setKosarLista(frissitettKosar);
  };

  const darabszamCsokkent = (termek) => {
    const frissitettKosar = [...kosarLista];
    const termekIndex = frissitettKosar.findIndex(item => item.id === termek.id);
    if (termekIndex >= 0) {
      if (frissitettKosar[termekIndex].darabszam > 1) {
        frissitettKosar[termekIndex].darabszam -= 1; 
        setKosarLista(frissitettKosar);
      } else {
        kosarbolEltavolit(termek);
      }
    }
  };

  return (
    <KosarContext.Provider value={{ kosarLista, kosarhozAd, kosarbolEltavolit, darabszamCsokkent }}>
      {children}
    </KosarContext.Provider>
  );
};

export default KosarProvider;
