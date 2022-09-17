import { Text, View } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { Info } from './components/Info';
import { CustomTouchableOpacity } from '../../../../components/CustomTouchableOpacity';

import { THEME } from '../../../../theme';

import { styles } from './styles';

export interface Ad {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface DuoCardProps {
  data: Ad;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: DuoCardProps) {
  const { name, yearsPlaying, weekDays, hourStart, hourEnd, useVoiceChannel } =
    data;

  const playTimeText =
    yearsPlaying > 1 ? `${yearsPlaying} anos` : `${yearsPlaying} ano`;

  const daysText = weekDays.length > 1 ? 'dias' : 'dia';
  const disponibilityText = `${weekDays.length} ${daysText} \u2022 ${hourStart} - ${hourEnd}`;

  return (
    <View style={styles.container}>
      <Info label="Nome" value={name} />

      <Info label="Tempo de jogo" value={playTimeText} />

      <Info label="Disponibilidade" value={disponibilityText} />

      <Info
        label="Chamada de áudio?"
        value={useVoiceChannel ? 'Sim' : 'Não'}
        valueColor={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <CustomTouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={24} color={THEME.COLORS.TEXT} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </CustomTouchableOpacity>
    </View>
  );
}
