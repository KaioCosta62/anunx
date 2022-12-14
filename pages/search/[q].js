import {useState} from 'react'
import slugify from 'slugify'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
    Container,
    Typography,
    Box,
    Grid,
}from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'
import SearchProducts from '../../src/components/SearchProducts'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0,2),
        marginBottom: 20
    },
    productLink:{
        textDecoration: 'none'
    }
}))

const List = ({products, query}) => {
    const classes = useStyles()
    const [search, setSearch] = useState()
    const router = useRouter()
    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`
        })
    }

    return(
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm = {12} md={12}>
                        <SearchProducts
                            handleSubmitSearch={handleSubmitSearch}
                            setSearch={setSearch}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Box className={classes.box}>
                        <Typography component='h6' variant='h6'>
                            Anúncios
                        </Typography>
                        {
                            products.length === 0
                            ? <Typography component='span' variant='subtitle2'>
                                ENCONTRADOS 0 anúncios para a busca {query}
                            </Typography>
                            :  <Typography component='span' variant='subtitle2'>
                                    ENCONTRADOS {products.length} anúncios
                                </Typography>
                        }
                        
                    <br/><br/>
                    <Grid container spacing={4}>
                        {
                            products.map((product) => {
                                const category = slugify(product.category).toLowerCase()
                                const title = slugify(product.title).toLowerCase()
                                return(
                                    <Grid key = {product._id} item xs={12} sm={6} md={4}>
                                        <Link href={`/${category}/${title}/${product._id}`} passHref>
                                            <a className={classes.productLink}>
                                                <Card
                                                    image={`/uploads/${product.files[0].name}`}
                                                    title={product.title}
                                                    subtitle={formatCurrency(product.price)}
                                                />
                                            </a> 
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    </Box>  
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({query}){
    const {q} = query
    const products = await ProductsModel.find({
        $or: [
          {
            title: {
                $regex: q,
                $options: 'i'
            }
          },
          {
            description: {
                $regex: q,
                $options: 'i'
            }
          }
        ]
    })
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            query: q
        }
    }
}

export default List