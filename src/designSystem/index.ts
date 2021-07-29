import * as MT from '@material-ui/core'
import * as MTIcons from '@material-ui/icons'
import CardView from './cardView/indext'
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
import SelectorApp from './selectorApp'

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
  SelectorApp,
  TimelineApp: Timeline
}

export default DS