import { LinearGradient } from 'expo-linear-gradient';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface GameCardProps extends TouchableOpacityProps {
  data: Game;
}

export function GameCard({ data, ...rest }: GameCardProps) {
  const {
    title,
    bannerUrl,
    _count: { ads },
  } = data;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
