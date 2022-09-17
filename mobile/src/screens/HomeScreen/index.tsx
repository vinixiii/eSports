import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo.png';

import { Background } from '../../components/Background';
import { Game, GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

const IP = process.env.IP;

export function HomeScreen() {
  const { navigate } = useNavigation();

  const [games, setGames] = useState<Game[]>([]);

  const handleNavigateToGameScreen = ({ id, title, bannerUrl }: Game) => {
    navigate('GameScreen', { id, title, bannerUrl });
  };

  useEffect(() => {
    fetch(`http://${IP}/games`)
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Image style={styles.logo} source={logoImg} />

          <Heading
            title="Encontre seu duo"
            subtitle="Selecione o game que deseja jogar..."
          />

          <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.listContent}
            data={games}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <GameCard
                data={item}
                onPress={() => handleNavigateToGameScreen(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
