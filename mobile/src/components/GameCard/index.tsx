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

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  const { id, name, ads, cover } = data;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
