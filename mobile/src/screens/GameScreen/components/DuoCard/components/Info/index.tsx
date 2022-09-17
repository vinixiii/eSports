import { Text, View } from 'react-native';

import { THEME } from '../../../../../../theme';

import { styles } from './styles';

interface InfoProps {
  label: string;
  value: string;
  valueColor?: string;
}

export function Info({
  label,
  value,
  valueColor = THEME.COLORS.TEXT,
}: InfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text style={[styles.value, { color: valueColor }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
