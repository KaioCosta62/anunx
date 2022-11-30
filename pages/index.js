import { useState } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import { useRouter } from 'next/router'

import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../src/templates/Default'

import Card from '../src/components/Card'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'
import SearchProducts from '../src/components/SearchProducts'


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: 20
    },
    productLink: {
        textDecoration: 'none'
    }
}))

const Home = ({ products }) => {
    const router = useRouter()
    const [search, setSearch] = useState()
    const classes = useStyles()

    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`
        })
    }
    return (
        <TemplateDefault>
            <Container maxWidth='md'>
                <Typography component='h1' variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <SearchProducts
                    handleSubmitSearch={handleSubmitSearch}
                    setSearch={setSearch}
                />
            </Container>

            <Container maxWidth='lg' className={classes.cardGrid}>
                <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                    {
                        products.map((product) => {
                            const category = slugify(product.category).toLowerCase()
                            const title = slugify(product.title).toLowerCase()
                            return (
                                <Grid key={product._id} item xs={12} sm={6} md={4}>
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
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps() {
    await dbConnect()
    const products = await ProductsModel.aggregate([{
        $sample: { size: 6 }
    }])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default Home