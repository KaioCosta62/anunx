import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3)
    },
    boxContainer: {
      paddingBottom: theme.spacing(3),
      marginTop: 20
    },
    inputLabel: {
      fontWeight: 'bold',
      color: theme.palette.primary.main
    }
}))

export default useStyles