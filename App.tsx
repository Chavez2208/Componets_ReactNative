import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Navigator } from './src/Navigation/Navigator';
import { ThemeProvider } from './src/context/Theme/ThemeContext';


// const customThem: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//   },
// };

const App = () => {

  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setBarStyle('dark-content');

  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;
