import axios from 'axios'
import { Formik } from 'formik'
import {useRouter} from 'next/router'
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  FormHelperText,
  Input,
  CircularProgress
} from '@material-ui/core'

import FileUpload from '../../../src/components/FileUpload'


import TemplateDefault from '../../../src/templates/Default'
import useToasty from '../../../src/contexts/Toasty'
import { initialValues, validationSchema } from './formValues'

import useStyles from './styles'
import { getSession } from 'next-auth/client'



const Publish = ({userId, image}) => {
  const classes = useStyles()
  const {setToasty} = useToasty()
  const router = useRouter()

  const formValues = {
    ...initialValues,
  }

   formValues.userId = userId
   formValues.image = image

  const handleSuccess = () => {
    setToasty({
      open: true,
      text: 'Anúncio cadastrado com sucesso!',
      severity: 'success'
    })

    router.push('/user/dashboard')
  }

  const handleError = () => {
    setToasty({
      open: true,
      text: 'Ops, ocorreu um erro, tente novamente!',
      severity: 'error'
    })
  }

  const handleFormSubmit = async (values) => {
    const formData = new FormData()

    for(let field in values){
      if(field === 'files'){
        values.files.forEach((file) => {
          formData.append('files', file)
        })
      }else{
        formData.append(field, values[field])
      }
    }

    axios.post('/api/products', formData)
    .then(handleSuccess)
    .catch(handleError)
  }

  return (
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting
          }) => {


            return (
              <form onSubmit={handleSubmit}>
                <Input type='hidden' name='userId' value={values.userId}/>
                <Input type='hidden' name='image' value={values.image}/>

                <Container maxWidth="sm">
                  <Typography component='h1' variant='h2' align='center' color="textPrimary">
                    Publicar Anúncio
                  </Typography>
                  <Typography component='h5' variant='h5' align='center' color="textPrimary">
                    Quanto mais detalhado, melhor!
                  </Typography>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>

                    <FormControl error={errors.title && touched.title} fullWidth>
                      <InputLabel className={classes.inputLabel}>Título do Anúncio</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.title && touched.title ? errors.title : null}
                      </FormHelperText>
                    </FormControl>
                    <br /><br />

                    <FormControl error={errors.category && touched.category} fullWidth>
                      <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
                      <Select
                        name='category'
                        value={values.category}
                        fullWidth
                        onChange={handleChange}
                      >
                        <MenuItem value='Bebê e criança'>Bebê e criança</MenuItem>
                        <MenuItem value='Agricultura'>Agricultura</MenuItem>
                        <MenuItem value='Moda'>Moda</MenuItem>
                        <MenuItem value='Carros, motos e barcos'>Carros, motos e barcos</MenuItem>
                        <MenuItem value='Serviços'>Serviços</MenuItem>
                        <MenuItem value='Lazer'>Lazer</MenuItem>
                        <MenuItem value='Animais'>Animais</MenuItem>
                        <MenuItem value='Móveis, casas e jardim'>Móveis, casas e jardim</MenuItem>
                        <MenuItem value='Imóveis'>Imóveis</MenuItem>
                        <MenuItem value='Equipamentos e ferramentas'>Equipamentos e ferramentas</MenuItem>
                        <MenuItem value='Celulares e tablets'>Celulares e tablets</MenuItem>
                        <MenuItem value='Esporte'>Esporte</MenuItem>
                        <MenuItem value='Tecnologia'>Tecnologia</MenuItem>
                        <MenuItem value='Emprego'>Emprego</MenuItem>
                        <MenuItem value='Outros'>Outros</MenuItem>
                      </Select>
                      <FormHelperText>
                        {errors.category && touched.category ? errors.category : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>


                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FileUpload
                      files={values.files}
                      errors={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                    />
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.description && touched.description} fullWidth>
                      <InputLabel className={classes.inputLabel}>Escreva os detalhes do que está vendendo</InputLabel>
                      <Input
                        name='description'
                        multiline
                        rows={6}
                        variant='outlined'
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.description && touched.description ? errors.description : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.price && touched.price} fullWidth>
                      <InputLabel className={classes.inputLabel}>Preço de venda</InputLabel>
                      <Input
                        name='price'
                        variant='outlined'
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color="textPrimary" gutterBottom>
                      Dados de Contato
                    </Typography>
                    <FormControl error={errors.name && touched.name} fullWidth>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>
                    <br /> <br />
                    <FormControl error={errors.email && touched.email} fullWidth>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>
                    <br /> <br />
                    <FormControl error={errors.phone && touched.phone} fullWidth>
                      <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                    <br /> <br />
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box textAlign='right'>
                    {
                      isSubmitting 
                      ? (<CircularProgress className={classes.loading}/>)
                      :(<Button type='submit' variant='contained' color='primary'>
                        Publicar anúncio
                      </Button>)
                    }
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
    </TemplateDefault>
  )
}

Publish.requireAuth = true

export async function getServerSideProps({ req }) {
  const {userId, user} = await getSession({ req })

  return {
    props: {
      userId,
      image: user.image
    }
  }
}


export default Publish