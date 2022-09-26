import React, { useContext, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ImpastoContex } from '../../context/appContex';

const Pizza = () => {
  const { impasto, impostazioni, setImpasto } = useContext(ImpastoContex);
  const { pesoPanetto, numPanetti, idratazione, farinaImpasto, acquaImpasto, acquaIdrolisi, licoliImpasto } = impasto;
  const { percentualeIdrolisi, percentualeLicoli, percentualeOlio, percentualeSale } = impostazioni;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const intValue = parseInt(value);

    if (intValue < 0) {
      return;
    }
    setImpasto((prevState) => ({ ...prevState, [name]: intValue }));
  };

  useEffect(() => {
    const farina = (pesoPanetto * numPanetti) / (2 - (100 - idratazione) / 100);
    const licoli = farina * (percentualeLicoli / 100);

    setImpasto((prevState) => ({
      ...prevState,
      farinaImpasto: Math.round(farina - licoli / 2),
      acquaImpasto: Math.round((farina * (idratazione - percentualeLicoli / 2 - percentualeOlio)) / 100),
      acquaIdrolisi:
        percentualeIdrolisi > 0
          ? Math.round((farina * (percentualeIdrolisi - percentualeLicoli / 2 - percentualeOlio)) / 100)
          : 0,
      licoliImpasto: Math.round(licoli),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pesoPanetto, numPanetti, idratazione]);

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        name='pesoPanetto'
        onChange={handleChange}
        label='Peso pesoPanetto in g'
        type='number'
        value={pesoPanetto}
        InputProps={{ inputProps: { min: 250 } }}
        fullWidth
      />
      <TextField
        name='numPanetti'
        onChange={handleChange}
        label='Numero panetti'
        type='number'
        value={numPanetti}
        InputProps={{ inputProps: { min: 1 } }}
        fullWidth
      />
      <TextField
        name='idratazione'
        onChange={handleChange}
        label='% Idratazione'
        type='number'
        value={idratazione}
        InputProps={{ inputProps: { min: 60, max: 100 } }}
        fullWidth
      />
      <TextField label='g Farina' type='number' value={farinaImpasto} fullWidth disabled />
      <Grid container>
        <Grid xs={4}>
          <TextField label='g H₂O totali' type='number' value={acquaImpasto} disabled />
        </Grid>
        <Grid xs={4}>
          <TextField label='g H₂O idrolisi' type='number' value={acquaIdrolisi} disabled />
        </Grid>
        <Grid xs={4}>
          <TextField label='g H₂O rimanenti' type='number' value={acquaImpasto - acquaIdrolisi} disabled />
        </Grid>
      </Grid>

      <Grid container>
        <Grid xs={4}>
          <TextField label='g Licole' type='number' value={licoliImpasto} fullWidth disabled />
        </Grid>
        <Grid xs={4}>
          <TextField
            label='g Olio'
            type='number'
            value={Math.round(farinaImpasto * (percentualeOlio / 100))}
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            label='g Sale'
            type='number'
            value={Math.round(farinaImpasto * (percentualeSale / 100))}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pizza;
