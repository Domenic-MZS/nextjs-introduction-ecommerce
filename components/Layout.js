import React from 'react';
import Head from 'next/head';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Next Amazora</title>
      </Head>

      <AppBar position="static">
        <Toolbar >
          <Typography>amazora</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        {children}
      </Container>

      <footer>
        <Typography>
          All rights reserved. Next Amazora.
        </Typography>
      </footer>
    </div>
  )
}
