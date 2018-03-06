import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from './components/mainComponent';

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

export default App;