import React, { useContext } from 'react';
import { TextField, Box } from '@mui/material';
import { ImpastoContex } from '../../context/appContex';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Licoli = () => {
  const { impasto, setImpasto } = useContext(ImpastoContex);
  const { licoliImpasto, licoliDaTenere } = impasto;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const intValue = parseInt(value);
    if (intValue < 0) {
      return;
    }
    setImpasto((prevState) => ({ ...prevState, [name]: intValue }));
  };

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        name='licoliDaTenere'
        onChange={handleChange}
        label='Peso licoli da tenere in g'
        type='number'
        value={licoliDaTenere}
        fullWidth
        InputProps={{ inputProps: { min: 0 } }}
      />

      <Grid container>
        <Grid xs={4}>
          <TextField
            name='licoliRinfresco'
            label='g di licoli da rinfrescare'
            type='number'
            value={Math.round((licoliDaTenere + licoliImpasto) / 3)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            name='acqua'
            label='g di H₂O'
            type='number'
            value={Math.round((licoliDaTenere + licoliImpasto) / 3)}
            fullWidth
            disabled
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            name='farina'
            label='g di farina'
            type='number'
            value={Math.round((licoliDaTenere + licoliImpasto) / 3)}
            fullWidth
            disabled
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Licoli;
