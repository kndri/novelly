import {  Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { AuthStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const logoMark = require('../../../assets/images/novelly_logo_mark.png');
const friendsWaveIllustration = require('../../../assets/images/friends_wave.png');


const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 4px;
  background-color: #000;
  shadow-color: #37b066;
  shadow-offset: 0px 6px;
  shadow-opacity: 0.15;
  shadow-radius: 12px;
  elevation: 4;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 800;
`;

export default function WelcomeScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Welcome">) {

  return (
    <View style={{flex: 1}}>
    <Image 
      source={friendsWaveIllustration} 
      style={{width: '100%', height: '60%', resizeMode: 'contain',}}
    />
    <View style={{padding: 20, alignItems: 'flex-start'}}>
      <Image 
        source={logoMark} 
        style={{width: 80, height: 80, resizeMode: 'contain', marginLeft: '-5%'}}
      />
      <Text style={{fontSize: 30, fontWeight: 800}}>Your new chapter begins</Text>
      <Text style={{fontSize: 30, fontWeight: 800}}>here </Text>
      <Button onPress={() => navigation.navigate('Login')}>
         <Label>Get Started</Label>
      </Button>
      <Text>Already a member? Log in</Text>
    </View>
  </View>
  );
}