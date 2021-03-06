import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({children}) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next Amazora</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar >
          <Typography>amazora</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>
        {children}
      </Container>

      <footer className={classes.footer}>
        <Typography>
          All rights reserved. Next Amazora.
        </Typography>
      </footer>
    </div>
  )
}
