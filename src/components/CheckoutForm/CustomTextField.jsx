import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
      render={({field: { onChange, onBlur}}) => (
        <TextField
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        name={name}
        fullWidth
        required={required}
        control={control}
        error={isError}
        />
      )}
        defaultValue=""
        control={control}
        fullWidth
        label={label}
        name={name}
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default CustomTextField;