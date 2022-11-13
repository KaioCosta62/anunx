import React, {useState} from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@material-ui/core'

import {AccountCircle} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6
  },
  divider: {
    margin: '6px 0'
  }
}));

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const classes = useStyles()

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Anunx
            </Typography>
            <Link href='/user/publish' passHref>
              <Button color="inherit" variant='outlined'>
                Anunciar e vender
              </Button>
            </Link>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {  
                 true === false
                 ?  <Avatar src=''/>
                 :  <AccountCircle></AccountCircle>  
              }
              <Typography variant='subtitle2' color='secondary' className={classes.userName}>
                Kaio Henrique
              </Typography>
            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <Link href='/user/dashboard' passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish'>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
