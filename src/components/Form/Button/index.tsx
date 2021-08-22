import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import { Container , Title} from './styles';

type DataButton  = {
  title: string;
} 

type Props = DataButton & TouchableOpacityProps;

export function Button({ title, ...rest}:Props){
  return (
    <Container  {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}