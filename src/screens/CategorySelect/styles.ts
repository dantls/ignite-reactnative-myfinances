import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

type CategoryProps = {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme})=>theme.colors.background};

`; 
export const Header = styled.View`
  background-color: ${({theme})=> theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
`; 
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.shape};
  padding-bottom: 20px;
`; 

export const Category = styled(TouchableOpacity)<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({theme, isActive}) => isActive
    ? theme.colors.secondary_light
    : theme.colors.background
  } 
`;


export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.text}
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

