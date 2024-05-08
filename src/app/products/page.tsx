'use client'
import React, { useEffect, useState } from 'react'
import AppLayout from '../components/layout'
import { useGetProductsQuery } from '../redux/services/productsApi'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from '@mui/material'
import debounce from 'lodash/debounce'
import Link from 'next/link'

const Products = () => {
  const [search, setSearch] = useState('')
  const { data: productsList } = useGetProductsQuery({
    search,
  })

  const getProductsList = async () => {
    try {
      await productsList({})
    } catch (error) {}
  }

  const debouncedFetch = debounce(getProductsList, 500)

  useEffect(() => {
    debouncedFetch()
  }, [search, productsList])

  return (
    <AppLayout>
      <Grid
        container
        xs={12}
        alignItems='center'
        justifyContent={'center'}
        mb={2}
      >
        <Grid item mt={2}>
          <Typography variant='h3'>Products</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item ml={5} mb={2}>
          <Typography> Filter by:</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
              setSearch((event.target as HTMLInputElement).value)
            }
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        xs={12}
        alignItems='center'
        justifyContent={'center'}
      >
        {productsList?.products?.map((products: ProductsList) => {
          return (
            <Grid
              item
              key={products?.id}
              xs={4}
              alignItems='center'
              justifyContent='center'
              direction='row'
            >
              <Card sx={{ maxWidth: 400, padding: 'auto', margin: 'auto' }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={products?.thumbnail}
                  title='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {products?.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {products?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={`/singleProduct?id=${products?.id}`}
                    className='navbar-links'
                  >
                    <Button size='small' variant='contained'>
                      More Info
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </AppLayout>
  )
}

export default Products
