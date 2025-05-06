import * as MT from '@mui/material';
import * as MTIcons from '@mui/icons-material';
import CardView from './cardView'
import ContainerFlex from './containerFlex'
import EditBox from './editBox'
import EditText from './editText/indext'
import Loading from './loading'
import Logo from './logo'
import ModalApp from './modalApp'
import SpacingField from './spacingField'
import RadioBox from './radioBox/index'
import Layout from './layout'
import { DrawerAppSelect } from './layout/drawer'
import BoxItem from './boxItem'
import Timeline from './timeline'

const DS = {
  ...MT,
  ICONS: {
    ...MTIcons
  },
  DrawerAppItem: DrawerAppSelect,
  EditText,
  ContainerFlex,
  CardView,
  SpacingField,
  Loading,
  Logo,
  EditBox,
  ModalApp,
  RadioBox,
  Layout,
  BoxItem,
  TimelineApp: Timeline
}

export default DS