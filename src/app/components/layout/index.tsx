'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import AppBarComponent from './appbar'
import { usePathname, useRouter } from 'next/navigation'
import { Box, Grid } from '@mui/material'
import { theme } from './../theme/theme'

const AppLayout = (props: any) => {
  const [openNav, setOpenNav] = useState(false)
  const pathname = usePathname()

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false)
    }
  }, [openNav])

  useEffect(
    () => {
      handlePathnameChange()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname],
  )

  return (
    <React.Fragment>
      <>
        <ThemeProvider theme={theme}>
          <AppBarComponent {...props} />
          <main>
            <Box>
              <Grid component='main'> {props.children} </Grid>
            </Box>
          </main>
        </ThemeProvider>
      </>
    </React.Fragment>
  )
}

export default AppLayout
