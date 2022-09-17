import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Game, GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

const IP = process.env.IP;

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(`http://${IP}/games`)
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });
  }, []);

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
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </ScrollView>
  );
}
