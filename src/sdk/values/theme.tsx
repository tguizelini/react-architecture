import { createMuiTheme } from '@material-ui/core/styles'
import COLORS from './colors'
import DIMENS from './dimens'

const AppTheme = createMuiTheme({
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
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: `${DIMENS.button.fontSize}px`,
        paddingTop: `${DIMENS.button.paddingHorizontal}px`,
        paddingBottom: `${DIMENS.button.paddingHorizontal}px`,
        color: COLORS.primary.color,
        '&:hover': {
          color: COLORS.secondary.hover,
          background: 'transparent',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: COLORS.secondary.hover,
          },
        }
      },
      outlined: {
        borderColor: COLORS.primary.color,
        fontSize: `${DIMENS.button.fontSize}px`,
        paddingTop: `${DIMENS.button.paddingHorizontal}px`,
        paddingBottom: `${DIMENS.button.paddingHorizontal}px`,
        borderRadius: 9,

      },
      contained: {
        textTransform: 'none',
        fontSize: `${DIMENS.button.fontSize}px`,
        paddingTop: `${DIMENS.button.paddingHorizontal}px`,
        paddingBottom: `${DIMENS.button.paddingHorizontal}px`,
        borderRadius: 9,

        color: COLORS.primary.contrastText,
        backgroundColor: COLORS.primary.color,
        '&:hover': {
          backgroundColor: COLORS.secondary.hover,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: COLORS.primary.color,
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
      fontSize: DIMENS.text.title,
      color: COLORS.subTitle,
      fontWeight: 'normal',
    },
    h3: {
      fontSize: DIMENS.text.subTitle,
      color: COLORS.subTitle,
      fontWeight: 'normal',
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

export default AppTheme