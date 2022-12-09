import {StyleSheet} from 'react-native';
import {themes} from '../../components';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flex: 3,
    backgroundColor: 'black',
    position: 'relative',
  },
  optionsWrapper: {
    flex: 1,
    backgroundColor: themes.oneDarkPro.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    color: themes.oneDarkPro.primary,
  },
});
