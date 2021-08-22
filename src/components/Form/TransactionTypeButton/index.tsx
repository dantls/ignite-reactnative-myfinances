import React from 'react';

import { Container , Icon, Title} from './styles';

import { TouchableOpacityProps } from 'react-native';

type DataTransactionButton  = {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
} 

type Props = DataTransactionButton & TouchableOpacityProps;

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest}:Props){
    
   return (
    <Container
      isActive={isActive}
      type={type}
      {...rest} 
    >
      <Icon 
        name={icons[type]}
        type={type}
      />
      <Title>{title}</Title>
    </Container>
  )
}