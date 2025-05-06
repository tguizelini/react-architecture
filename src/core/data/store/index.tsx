import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducers'

interface IStore {
    children: React.ReactNode
}

const store = createStore(rootReducer)

const Store: React.FC<IStore> = props => (
    <Provider store={store}>
        {props.children}
    </Provider>
)

export default Store