import { ImageBackground } from 'react-native';

import galaxyBackgroundImg from '../../assets/galaxy-background.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={galaxyBackgroundImg}
      defaultSource={galaxyBackgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
