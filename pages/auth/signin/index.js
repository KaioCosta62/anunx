import Link from 'next/link'
import Image from 'next/image'
import {Formik } from 'formik'
import axios from 'axios'
import {useRouter} from 'next/router'
import {signIn, useSession} from 'next-auth/client'

import { 
     Container,
     Typography,
     FormControl,
     InputLabel,
     Box,
     FormHelperText,
     Input,
     Button,
     CircularProgress 
} from '@material-ui/core'

import useToasty from '../../../src/contexts/Toasty'
import useStyles from '../../../src/components/SignInComponents/styles'
import { initialValues, validationSchema } from '../../../src/components/SignInComponents/formValues'
import TemplateDefault from '../../../src/templates/Default'
import  Alert  from '@material-ui/lab/Alert'

const Signin = ({APP_URL}) => {
    const classes = useStyles()
    const router = useRouter()
    console.log(router)
    const {setToasty} = useToasty()
    const [session] = useSession()


    console.log(session)
    const handleGoogleLogin = () => {
        signIn('google', {
            callbackUrl: `${APP_URL}/user/dashboard`
        })
    }

    const handleFormSubmit = async (values) => {
        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: `${APP_URL}/user/dashboard`
        })
    }
    return (
        <TemplateDefault>
            <Container maxWidth='sm' component='main' className={classes.container}>
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Entre na sua conta
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>

                    <Box display='flex' justifyContent='center'>
                        <Button 
                        variant='contained'
                        color='primary'
                        startIcon={
                            <Image
                                src='/images/logo.webp'
                                width={20}
                                height={20}
                                alt='Login com Google'
                            />
                        }
                        onClick={handleGoogleLogin}
                        >Entrar com Google
                        </Button>
                    </Box>

                    <Box className={classes.orSeparator}>
                        <span>ou</span>
                    </Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema= {validationSchema}
                        onSubmit={handleFormSubmit}  
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting
                            }) => {

                                return (
                                    <form onSubmit={handleSubmit}>
                                        {
                                             router.query.i === '1'
                                             ? (
                                               <Alert severity="error" className={classes.errorMessage}>
                                                 Usuário ou senha inválidos
                                               </Alert>
                                             )
                                             : null
                                        }
                                        <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                                            <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name='email'
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                                            <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                                            <Input
                                                name='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>

                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress className={classes.loading}/>
                                                )
                                                :
                                                (   
                                                    <>
                                                        <Button type='submit' variant='contained' color='primary' fullWidth className = {classes.submit}>
                                                        Entrar
                                                        </Button>
                                                        <Typography component='span' variant='body2'>
                                                            Não tem uma conta? Clique <Link href='/auth/signup'>aqui</Link> e cadastre-se
                                                        </Typography>
                                                    </>
                                                    
                                                )
                                        }                              
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>
        </TemplateDefault>
    )
}


export async function getServerSideProps (){
    return {
        props: {
            APP_URL: process.env.APP_URL
        }
    }
}
 
export default Signin