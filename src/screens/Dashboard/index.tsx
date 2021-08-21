import React from 'react';
import {Container, HighlightCards,TransactionList, Transactions,Title} from './styles';
import {Header} from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

type ListProps = {
  id: string;
}  
export type DataListProps = ListProps & TransactionCardProps

export function Dashboard(){

  const data:DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:"Desenvolvimento de App",
      amount:"R$ 17.000,00",
      date:"13/04/2020",
      category:{
        name: "Vendas",
        icon: "dollar-sign"
      }
    },
    {
      id: '2',
      type: 'negative',
      title:"Aluguel",
      amount:"R$ 1.000,00",
      date:"13/03/2020",
      category:{
        name: "Casa",
        icon: "shopping-bag"
      }
    },
    {
      id: '3',
      type: 'negative',
      title:"Hamburgueria",
      amount:"R$ 100,00",
      date:"13/03/2020",
      category:{
        name: "Alimentação",
        icon: "coffee"
      }
    }
  ]


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

       <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
       />
      </Transactions>
    </Container>
  )
}

