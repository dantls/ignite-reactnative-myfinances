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

type Category = {
  name: string;
  icon: string;
}

export type TransactionCardProps =  {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

type Props = {
  data: TransactionCardProps
}


export function TransactionCard({data}:Props){

  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}