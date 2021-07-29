import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducers'

const store = createStore(rootReducer)

const Store: React.FC = props => (
    <Provider store={store}>
        {props.children}
    </Provider>
)

export default Store