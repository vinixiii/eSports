import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { AppParamList } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { CustomTouchableOpacity } from '../../components/CustomTouchableOpacity';
import { Heading } from '../../components/Heading';
import { Ad, DuoCard } from './components/DuoCard';

import logoImg from '../../assets/logo.png';

import { THEME } from '../../theme';

import { styles } from './styles';

const IP = process.env.IP;

type GameScreenRouteProp = RouteProp<AppParamList, 'GameScreen'>;

export function GameScreen() {
  const { params } = useRoute<GameScreenRouteProp>();
  const { goBack } = useNavigation();

  const [ads, setAds] = useState<Ad[]>([]);

  const handleGoBack = () => {
    goBack();
  };

  useEffect(() => {
    fetch(`http://${IP}/games/${params.id}/ads`)
      .then(res => res.json())
      .then(data => {
        setAds(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <CustomTouchableOpacity
              style={styles.backButton}
              onPress={handleGoBack}
            >
              <Entypo
                name="chevron-thin-left"
                size={24}
                color={THEME.COLORS.CAPTION_300}
              />
            </CustomTouchableOpacity>

            <Image style={styles.logo} source={logoImg} />
          </View>

          <Image
            style={styles.banner}
            source={{ uri: params.bannerUrl }}
            resizeMode="cover"
          />

          <Heading
            title={params.title}
            subtitle="Conecte-se e comece a jogar!"
          />

          <FlatList
            style={styles.listContainer}
            contentContainerStyle={
              ads.length > 1 ? styles.listContent : styles.emptyListContent
            }
            data={ads}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <DuoCard data={item} onConnect={() => null} />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Ainda não há anúncios para esse game :(
              </Text>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
