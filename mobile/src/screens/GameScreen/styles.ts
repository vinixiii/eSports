import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
  },
  backButton: {
    position: 'absolute',
    left: 32,
  },
  logo: {
    width: 72,
    height: 40,
  },
  banner: {
    marginTop: 32,
    width: 311,
    height: 160,
    borderRadius: 8,
  },
});
