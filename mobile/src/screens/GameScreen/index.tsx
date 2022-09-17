import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/Background';

import logoImg from '../../assets/logo.png';

import { AppParamList } from '../../@types/navigation';

import { THEME } from '../../theme';

import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { CustomTouchableOpacity } from '../../components/CustomTouchableOpacity';

type GameScreenRouteProp = RouteProp<AppParamList, 'GameScreen'>;

export function GameScreen() {
  const { params } = useRoute<GameScreenRouteProp>();
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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

        <Heading title={params.title} subtitle="Conecte-se e comece a jogar!" />
      </SafeAreaView>
    </Background>
  );
}
