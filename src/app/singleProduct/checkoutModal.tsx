import React from 'react'
import { Modal, Box, Typography } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const CheckoutModal = ({ price }: { price: number }) => {
  return (
    <Box sx={style}>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Thank you for shopping
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        Please pay Rs. ${price}
      </Typography>
    </Box>
  )
}

export default CheckoutModal
