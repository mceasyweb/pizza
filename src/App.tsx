import React, { useState, useMemo } from 'react';
import FullWidthTabs from './components/FullWidthTabs';
import { ImpastoContex } from './context/appContex';

const defaultImpasto: IImpasto = {
  pesoPanetto: 250,
  numPanetti: 1,
  idratazione: 60,
  farinaImpasto: 0,
  acquaImpasto: 0,
  acquaIdrolisi: 0,
  licoliImpasto: 0,
  licoliDaTenere: 50,
};

const defaultImpostazioni: IImpostazioni = {
  percentualeIdrolisi: 55,
  percentualeLicoli: 10,
  percentualeOlio: 3,
  percentualeSale: 2,
};

function App() {
  const [impasto, setImpasto] = useState<IImpasto>(defaultImpasto);

  const localImpostazioni = JSON.parse(localStorage.getItem('impostazioni') || '""') || defaultImpostazioni;

  console.log(localImpostazioni);
  const [impostazioni, setImpostazioni] = useState(localImpostazioni || defaultImpostazioni);

  const value = useMemo(() => ({ impasto, impostazioni, setImpasto, setImpostazioni }), [impasto, impostazioni]);

  return (
    <ImpastoContex.Provider value={value}>
      <FullWidthTabs />
    </ImpastoContex.Provider>
  );
}

export default App;
