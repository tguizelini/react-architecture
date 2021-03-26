import Routes from "./routes";
import GlobalContext from "./data/store";

const App = () => {
  return (
      <GlobalContext>
        <Routes />
      </GlobalContext>
  )
}

export default App
