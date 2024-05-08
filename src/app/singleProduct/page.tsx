'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useGetSingleProductQuery } from '../redux/services/productsApi'
import { Grid, Typography, Button, Modal } from '@mui/material'
import AppLayout from '../components/layout'
import Image from 'next/image'
import CheckoutModal from './checkoutModal'

const SingleProduct = () => {
  const [openModal, setOpenModal] = useState(false)
  const searchParams = useSearchParams()
  const productId = searchParams.get('id')
  const { data: productDetails } = useGetSingleProductQuery({ id: productId })

  const handleModalClose = () => {
    setOpenModal(false)
  }

  return (
    <AppLayout>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        mt={2}
        mb={2}
      >
        <Typography variant='h4'>Product Details</Typography>
      </Grid>
      <Grid
        container
        padding={3}
        xs={10}
        margin='auto'
        sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
      >
        <Grid item xs={5}>
          <Image
            src={productDetails?.thumbnail}
            width={350}
            height={350}
            alt={'product-image'}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant='h5'>{productDetails?.title}</Typography>
          <Typography variant='h6'>Rs.{productDetails?.price}</Typography>
          <Typography marginTop={2}>
            Rating: {productDetails?.rating} stars
          </Typography>
          <Typography>Brand: {productDetails?.brand}</Typography>
          <Typography>Category: {productDetails?.category}</Typography>
          <Typography>
            {productDetails?.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Typography>
          <Typography marginTop={2}>{productDetails?.description}</Typography>
          <Button
            variant='contained'
            sx={{ marginTop: 3 }}
            onClick={() => setOpenModal(true)}
          >
            Buy now
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <CheckoutModal price={productDetails?.price} />
      </Modal>
    </AppLayout>
  )
}

export default SingleProduct
