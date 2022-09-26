import React, { useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { ImpastoContex } from '../../context/appContex';

const Impostazioni = () => {
  const { impostazioni, setImpostazioni } = useContext(ImpastoContex);
  const { percentualeIdrolisi, percentualeLicoli, percentualeOlio, percentualeSale } = impostazioni;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    const intValue = parseInt(value);
    if (intValue < 0) {
      return;
    }
    setImpostazioni((prevState) => ({ ...prevState, [name]: intValue }));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem('impostazioni', JSON.stringify(impostazioni));
  };

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <TextField
        name='percentualeIdrolisi'
        onChange={handleChange}
        label='% Idrolisi'
        type='number'
        value={percentualeIdrolisi}
        fullWidth
        InputProps={{ inputProps: { min: 50, max: 55 } }}
      />
      <TextField
        name='percentualeLicoli'
        onChange={handleChange}
        label='% Licoli'
        type='number'
        value={percentualeLicoli}
        InputProps={{ inputProps: { min: 10, max: 100 } }}
        fullWidth
      />
      <TextField
        name='percentualeOlio'
        onChange={handleChange}
        label='% Olio'
        type='number'
        value={percentualeOlio}
        InputProps={{ inputProps: { min: 0, max: 100 } }}
        fullWidth
      />
      <TextField
        name='percentualeSale'
        onChange={handleChange}
        label='% Sale'
        type='number'
        value={percentualeSale}
        fullWidth
      />
      <Button variant='contained' onClick={handleClick}>
        Salva
      </Button>
    </Box>
  );
};

export default Impostazioni;
