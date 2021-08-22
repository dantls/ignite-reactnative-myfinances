import React from 'react';
import {
  Container,
  Category,
  Icon
} from './styles';

type Props = {
  title: string;
}

export function CategorySelect({title, ...rest}:Props){
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down"/>
    </Container>
  )
}