import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme})=> theme.colors.background};
  flex: 1;
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
export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
`;
export const Fields = styled.View``;