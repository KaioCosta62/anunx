import { makeStyles } from '@material-ui/core/styles'
import {
    Paper, 
    InputBase, 
    IconButton,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/search'

const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: '20px'
    },
}))

const SearchProducts = ({handleSubmitSearch, setSearch}) => {
    const classes = useStyles()
    return(
        <Paper className={classes.searchBox}>
        <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Ex.: Iphone 12 com garantia'
            fullWidth
        />
        <IconButton onClick={handleSubmitSearch}>
            <SearchIcon />
        </IconButton>
    </Paper>
    )  
}

export default SearchProducts