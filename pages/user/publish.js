import { Box, Button, Container, IconButton, Select, TextField, Typography } from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'

import { makeStyles } from '@material-ui/styles'
import DeleteForever from '@material-ui/icons/DeleteForever'


const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},
  container: {
    padding: theme.spacing(8,0,6)
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3)
  },
  boxContainer: {
    paddingBottom: theme.spacing(3)
  },
  thumbsContainer: {
    display: 'flex',
    marginTop: 15
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
  }
}))

const Publish = () => {
  const classes = useStyles()
  return(
    <TemplateDefault>

      <Container maxWidth="sm" className={classes.container}>
        <Typography component='h1' variant='h2' align='center' color="textPrimary">
          Publicar Anúncio
        </Typography>
        <Typography component='h5' variant='h5' align='center' color="textPrimary">
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth='md' className = {classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color="textPrimary">
            Título do anúncio
          </Typography>
          <TextField
            label='Ex.: Bicicleta aro 18 com garantia'
            size='small'
            fullWidth
          />
          <br/><br/>
          <Typography component='h6' variant='h6' color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=''
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age'
            }}
          >
            <option value=''>Selecione</option>
            <option value={1}>Bebê e criança</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={3}>Carros, motos e barcos</option>
            <option value={3}>Serviços</option>
            <option value={3}>Lazer</option>
            <option value={3}>Animais</option>
            <option value={3}>Móveis, casas e jardim</option>
            <option value={3}>Imóveis</option>
            <option value={3}>Equipamentos e ferramentas</option>
            <option value={3}>Celulares e tablets</option>
            <option value={3}>Esporte</option>
            <option value={3}>Tecnologia</option>
            <option value={3}>Emprego</option>
            <option value={3}>Outros</option>           
          </Select>
        </Box>
      </Container>

      <Container maxWidth='md' className = {classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color="textPrimary">
            Imagens
          </Typography>
          <Typography component='div' variant='body2' color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio
          </Typography>
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone}>
              <Typography variant='body2' color='textPrimary'>
                Clique para adicionar ou arraste a imagem para aqui.
              </Typography>
            </Box>
            <Box 
              className={classes.thumb}
              style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}
            >
              <Box className={classes.mainImage}>
                <Typography variant='body2' color='secondary'>
                  Principal
                </Typography>
              </Box>
              <Box className={classes.mask}>
                <IconButton color='secondary'>
                  <DeleteForever fontSize='large'/>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxWidth='md' className = {classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color="textPrimary">
            Descrição
          </Typography>
          <Typography component='div' variant='body2' color="textPrimary">
            Escreva os detalhes do que está vendendo
          </Typography>
          <TextField
            multiline
            rows={6}
            variant='outlined'
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth='md' className = {classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color="textPrimary" gutterBottom>
            Dados de Contato
          </Typography>
          <TextField
            label='Nome'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br/> <br/>
          <TextField
            label='E-mail'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br/> <br/>
          <TextField
            label='Telefone'
            variant='outlined'
            size='small'
            fullWidth
          />
          <br/> <br/>
        </Box>
      </Container>

      <Container maxWidth='md' className = {classes.boxContainer}>
        <Box textAlign='right'>
          <Button variant='contained' color='primary'>
            Publicar anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish