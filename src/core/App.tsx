import { ThemeProvider } from '@mui/material/styles';
import Routes from "./routes";
import AppTheme from "./values/theme";
import Store from './data/store';

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Store>
        <Routes />
      </Store>
    </ThemeProvider>
  )
}

export default App
