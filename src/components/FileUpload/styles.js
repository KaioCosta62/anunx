import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},
    thumbsContainer: {
      display: 'flex',
      marginTop: 15,
      flexWrap: 'wrap'
    },
    dropzone: {
      width: 200,
      height: 150,
      backgroundColor: theme.palette.background.default,
      border: '2px dashed black',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      padding: '10px',
      margin: '0 15px 15px 0'
    },
    thumb: {
      width: 200,
      height: 150,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'relative',
      margin: '0 15px 15px 0',
  
      '&:hover $mask': {
        display: 'flex'
      },
  
      '& $mask': {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: '100%',
        width: '100%'
      },
  
      '& $mainImage': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: 'darkblue',
        padding: '6px 10px',
      }
    },
}))

export default useStyles