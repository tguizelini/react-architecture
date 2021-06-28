import { createMuiTheme } from '@material-ui/core/styles'
import COLORS from './colors'
import DIMENS from './dimens'

const LusoTheme = createMuiTheme({
  palette: {
    background: {
      default: COLORS.background,
      paper: COLORS.paper
    },
    action: {
      disabledBackground: COLORS.disabled.button.color,
      disabled: COLORS.disabled.button.contrastText
    },
    primary: {
      main: COLORS.primary.color,
      contrastText: COLORS.primary.contrastText,
    },
    secondary: {
      main: COLORS.secondary.color,
      contrastText: COLORS.secondary.contrastText,
    },
  },
  overrides: {
    //button default
    MuiButton: {
      contained: {
        color: COLORS.secondary.contrastText,
        backgroundColor: COLORS.secondary.color,
        '&:hover': {
          backgroundColor: COLORS.secondary.hover,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: COLORS.secondary.color,
          },
        }
      }
    }
  },
  //texts
  typography: {
    fontFamily: 'Raleway, Arial',
    h1: {
      fontSize: DIMENS.text.titleHero,
      color: COLORS.title
    },
    h2: {
      fontSize: DIMENS.text.subTitle,
      color: COLORS.title
    },
    subtitle1: {
      fontSize: DIMENS.text.subTitle,
      color: COLORS.subTitle
    },
    body1: {
      fontWeight: 500,
      color: COLORS.body,
      fontSize: DIMENS.text.body
    },
    button: {
      fontStyle: 'normal',
    },
  },
})

export default LusoTheme