import { MuiThemeProvider } from '@material-ui/core/styles'
import Routes from "./routes";
import AppTheme from "./values/theme";
import Store from './data/store';

const App = () => {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <Store>
        <Routes />
      </Store>
    </MuiThemeProvider>
  )
}

export default App
