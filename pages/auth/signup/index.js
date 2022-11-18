import {Formik } from 'formik'
import { Container, Typography, FormControl, InputLabel, Box, FormHelperText, Input, Button } from '@material-ui/core'

import useStyles from './styles'
import { initialValues, validationSchema } from './formValues'
import TemplateDefault from '../../../src/templates/Default'

const Signup = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth='sm' component='main' className={classes.container}>
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Crie sua conta
                </Typography>
                <Typography component='h2' variant='h6' align='center' color='textPrimary'>
                    E anuncie para todo o Brasil
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema= {validationSchema}
                        onSubmit={(values) => {
                            console.log('Ok, form enviado', values)
                        }}
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit
                            }) => {

                                return (
                                    <form onSubmit={handleSubmit}>
                                        <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
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

                                        <FormControl fullWidth error={errors.passwordConf && touched.passwordConf}>
                                            <InputLabel className={classes.inputLabel}>Confirmação de senha</InputLabel>
                                            <Input
                                                name='passwordConf'
                                                type='password'
                                                value={values.passwordConf}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf: null}
                                            </FormHelperText>
                                        </FormControl>

                                        <Button type='submit' variant='contained' color='primary' fullWidth className = {classes.submit}>
                                            Publicar anúncio
                                        </Button>

                                        <Typography component='h6' variant='body2'>
                                            Já tem uma conta? Entre aqui
                                        </Typography>
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

export default Signup