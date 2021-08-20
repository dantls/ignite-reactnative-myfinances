import React from 'react';
import { 
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  CategoryName,
  Category,
  Date,
} from './styles';

export function TransactionCard(){

  return (
    <Container>
      <Title>Desenvolvimento de App</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  )
}