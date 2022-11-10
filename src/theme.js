import {createTheme} from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary:{
      main: '#fff'
    },
    background: {
      default: 'rgb(244,244,245)',
      white: '#fff'
    }
  }
})

export default theme