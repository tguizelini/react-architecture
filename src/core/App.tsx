import Routes from "./routes";
import AppStore from "./data/store";

const App = () => {
  return (
      <AppStore>
        <Routes />
      </AppStore>
  )
}

export default App
