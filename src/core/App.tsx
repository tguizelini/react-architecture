import Routes from "./routes";
import GlobalContext from "./data/context";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LusoTheme from "./values/theme";

const App = () => {
  return (
    <MuiThemeProvider theme={LusoTheme}>
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </MuiThemeProvider>
  )
}

export default App
