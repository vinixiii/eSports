import React from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import logoImg from '../../assets/logo.png';

import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <Image style={styles.logo} source={logoImg} />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </ScrollView>
  );
}
