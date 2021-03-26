import Routes from "./routes";
import GlobalContext from "./data/context";

const App = () => {
  return (
      <GlobalContext>
        <Routes />
      </GlobalContext>
  )
}

export default App
