import React from 'react';
import { Image, View } from 'react-native';

import logoImg from '../../assets/logo.png';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
    </View>
  );
}
