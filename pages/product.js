import { 
    Avatar, 
    Box,
    Card, 
    CardHeader, 
    CardMedia, 
    Chip, 
    Container, 
    Grid, 
    Typography 
} from '@material-ui/core'

import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    productName: {
        margin: '20px 0'
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 20
    }
}))
const Product = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            Carossel
                        </Box>

                        <Box className={classes.box} align='left'>
                            <Typography component='span' variant='caption' >Publicado 16 de Junho de 2021</Typography>
                            <Typography component='h4' variant='h4' className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component='h4' variant='h4' className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label='Categoria'></Chip>
                        </Box>
                        <Box className={classes.box}>
                            <Typography component='h6' variant='h6' >Descrição</Typography>
                            <Typography component='p' variant='body2' >
                                Cras fermentum vel libero nec rutrum. Maecenas commodo, nunc ut molestie feugiat, mi justo ultricies quam, at vulputate leo turpis quis lectus. Sed in neque vel enim euismod tincidunt. Fusce dui neque, luctus in scelerisque vitae, elementum ac erat. Praesent erat orci, ullamcorper ac auctor id, laoreet eget velit. Etiam pretium, ligula eu dignissim lobortis, enim leo porttitor dolor, vitae mollis lectus nisl auctor ex. Mauris ut rhoncus est, eu faucibus mi. Suspendisse commodo nec est non ultricies. Sed massa arcu, ornare scelerisque accumsan ac, porta eget orci. Sed ac risus a erat porta tristique sed id nisl. Integer vel purus in odio dapibus elementum.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.box} elevation={0}>
                            <CardHeader
                                avatar={
                                    <Avatar>K</Avatar>
                                }

                                title="Kaio Henrique"
                                subheader="kaio_costa222@hotmail.com"
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random'
                                title='Kaio Henrique'
                            />
                        </Card>

                        <Box className={classes.box}>
                            <Typography component='h6' variant='h6' >Localização</Typography>       
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product