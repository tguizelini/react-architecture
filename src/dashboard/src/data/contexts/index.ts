import { IReducerAction } from "sdk/data/context/contracts"

export const DashboardActionTypes = {
    LIST: "Dashboard_LIST"
}

interface IDashboardStore {
    DashboardList?: any[]
}

const INITIAL_VALUE: IDashboardStore = {
    DashboardList: []
}

const DashboardReducer = (state = INITIAL_VALUE, action: IReducerAction) => {
    switch (action.type) {
        case DashboardActionTypes.LIST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default DashboardReducer
