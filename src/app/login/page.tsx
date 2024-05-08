'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Container,
  CssBaseline,
  Box,
  Avatar,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useDispatch } from 'react-redux'
import { setDetails } from '../redux/features/loginSlice'
import { useRouter } from 'next/navigation'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmitHandler = (data: LoginData) => {
    dispatch(setDetails(data))
    router.push('/dashboard')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='Username'
            label='Username'
            autoComplete='off'
            autoFocus
            {...register('username')}
            error={!!errors?.username}
            helperText={
              errors.username && (
                <Typography variant='body2'>
                  {errors?.username?.message}{' '}
                </Typography>
              )
            }
          />
          <TextField
            margin='normal'
            required
            fullWidth
            {...register('password')}
            label='Password'
            type={passwordVisibility ? 'text' : 'password'}
            id='password'
            autoComplete='off'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <IconButton
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                  >
                    {!passwordVisibility ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors?.password}
            helperText={
              errors.password && (
                <Typography variant='body2'>
                  {errors?.password?.message}
                </Typography>
              )
            }
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Login
