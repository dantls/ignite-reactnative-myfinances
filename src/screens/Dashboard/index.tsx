import React from 'react';
import {Container, HighlightCards, Transactions,Title} from './styles';
import {Header} from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard(){
  return (
    <Container>
      <Header />

      <HighlightCards>
        <HighlightCard 
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13 de agosto"
          type="up"
        />
        <HighlightCard 
          title="Saídas"
          amount="R$ 5.000,00"
          lastTransaction="Última entrada dia 12 de agosto"
          type="down"
        />
        <HighlightCard 
          title="Total"
          amount="R$ 12.000,00"
          lastTransaction="01 a 06 de agosto"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>

        
       <TransactionCard/>
      </Transactions>
    </Container>
  )
}

