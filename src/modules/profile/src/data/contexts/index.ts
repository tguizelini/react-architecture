import { IReducerAction } from "../../../../../core/data/context/contracts"

export const ProfileActionTypes = {
    LIST: "Profile_LIST"
}

interface IProfileStore {
    ProfileList?: any[]
}

const INITIAL_VALUE: IProfileStore = {
    ProfileList: []
}

const ProfileReducer = (state = INITIAL_VALUE, action: IReducerAction) => {
    switch (action.type) {
        case ProfileActionTypes.LIST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default ProfileReducer
