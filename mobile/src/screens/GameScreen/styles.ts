import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 28,
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
    marginBottom: 24,
    width: 311,
    height: 160,
    borderRadius: 8,
  },
  listContainer: {
    width: '100%',
    marginTop: 16,
  },
  listContent: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
