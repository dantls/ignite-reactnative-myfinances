import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'



export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  height:${RFPercentage(42)}px;
  background-color: ${({theme})=>theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(10)}px;
`;

export const User = styled.View`
  margin-left: 10px;
`;


export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;


export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;
