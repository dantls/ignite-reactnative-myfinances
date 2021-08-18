import React from 'react';
import {Container, HighlightCards} from './styles';
import {Header} from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard(){
  return (
    <Container>
      <Header />

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}

