import { combineReducers } from "redux"
import BlankStore from "_blankModule/src/data/store"
import AuthStore from "auth/src/data/store"
import DashboardStore from "dashboard/src/data/store"
import SettingsStore from "settings/src/data/store"

const rootReducer = combineReducers({
  ...BlankStore,
  ...AuthStore,
  ...DashboardStore,
  ...SettingsStore
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer