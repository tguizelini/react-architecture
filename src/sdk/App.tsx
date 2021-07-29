import { MuiThemeProvider } from '@material-ui/core/styles'
import Routes from "./routes";
import GlobalContext from "./data/context";
import AppTheme from "./values/theme";

const App = () => {
  return (
    <MuiThemeProvider theme={AppTheme}>
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </MuiThemeProvider>
  )
}

export default App
