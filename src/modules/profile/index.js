//routes
import ProfileDetail from "./src/ui/detail"
import ProfileList from "./src/ui/list"

const ProfileModule = {
    name: 'Profile',
    routes: [
        {
            path: '/profile',
            private: false,
            component: ProfileList
        },
        {
            path: '/profile/detail',
            private: false,
            component: ProfileDetail
        }
    ]
}

export default ProfileModule