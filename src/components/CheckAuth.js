import { useEffect } from "react"
import {useRouter} from 'next/router'
import { useSession } from "next-auth/client"
import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'block',
        margin: '30% auto 0 auto'
    }
}))

const CheckAuth = ({Component, pageProps}) => {
    const classes = useStyles()
    const [session, loading] = useSession()
    const router = useRouter()
    useEffect(() => {
        if(loading) return
        if(!session){
            router.push('/auth/signin')
        }
    }, [session, loading])

    if(session){
        return <Component {...pageProps}/>
    }

    return <CircularProgress className={classes.loading}/>
}

export default CheckAuth