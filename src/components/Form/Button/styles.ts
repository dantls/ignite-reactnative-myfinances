import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 5px;
  
  align-items:center;
  justify-content: center;

  font-family: ${({theme}) => theme.fonts.medium};
  background-color: ${({theme}) => theme.colors.secondary};
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.shape};
  padding: ${RFValue(18)}px; 

`;

