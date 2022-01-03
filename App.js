import { StyleSheet, SafeAreaView } from 'react-native';
import {
  Typography,
  Colors,
  Spacings,
  ThemeManager,
} from 'react-native-ui-lib';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Home from './components/Home';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

Colors.loadColors({
  primary: '#007AFF',
  light: '#32ade6',
  secondary: '#34c759',
  warning: '#ff3b30',
});

Typography.loadTypographies({
  h1: { fontSize: scale(28), fontWeight: '300' },
  h2: { fontSize: scale(22), fontWeight: '300' },
});

ThemeManager.setComponentTheme('Text', {
  fontFamily: 'sans-serif',
});

ThemeManager.setComponentTheme('Button', {
  fontFamily: 'sans-serif',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});
