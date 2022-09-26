interface TabPanelProps extends BoxProps {
  children: React.ReactNode;
  index: number;
  value: number;
  sx?: SxProps;
}

type IImpasto = {
  pesoPanetto: number;
  numPanetti: number;
  idratazione: number;
  farinaImpasto: number;
  acquaImpasto: number;
  acquaIdrolisi: number;
  licoliImpasto: number;
  licoliDaTenere: number;
};

type IImpostazioni = {
  percentualeLicoli: number;
  percentualeIdrolisi: number;
  percentualeSale: number;
  percentualeOlio: number;
};

type ImpastoContextSchema = {
  impasto: IImpasto;
  impostazioni: IImpostazioni;
  setImpasto: React.Dispatch<React.SetStateAction<IImpasto>>;
  setImpostazioni: React.Dispatch<React.SetStateAction<IImpostazioni>>;
};
