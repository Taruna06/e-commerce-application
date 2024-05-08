'use client'
import React from 'react'
import AppLayout from '../components/layout'
import { Button, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Dashboard = () => {
  const userDetails = useSelector((state: UserState) => state.login?.user)
  return (
    <AppLayout>
      <Grid container justifyContent={'center'} alignItems={'center'} mt={2}>
        <Grid item>
          <Typography variant='h4'>Welcome {userDetails?.username}</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} alignItems={'center'} mt={2}>
        <Grid item>
          <Link href='/products'>
            <Button variant='contained'>Start Browsing</Button>
          </Link>
        </Grid>
      </Grid>
    </AppLayout>
  )
}

export default Dashboard
