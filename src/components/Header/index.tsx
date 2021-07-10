import React from 'react';


import {
  Wrapper,
  Container,
  UserInfo,
  Avatar,
  User,
  UserGreeting,
  UserName
} from './styles';

export function Header(){
  return(
    <Container>
      <Wrapper>
        <UserInfo>
          <Avatar 
            source={{uri: 'https://github.com/dantls.png'}}
          />
          
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Danilo</UserName>
          </User>
        </UserInfo>
      </Wrapper>
    </Container>
  )
}