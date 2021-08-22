import React from 'react';
import { Control , Controller} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import { Input } from '../Input';
import { Container } from './styles';

type Props = {
  control: Control;
  name: string;
} & TextInputProps



export function InputForm({
  control,
  name,
  ...rest
}:Props){

  return (
    <Container>
      <Controller
        control={control}
        render={({field:{onChange, onBlur, value}}) => (
          <Input
            {...rest}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
        name={name}
      />
    </Container>
  )
}