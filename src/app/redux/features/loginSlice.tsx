import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoginState = {
  user: { username?: string; password?: string } | null
}

const loginInitialState = {
  user: null,
} as LoginState

export const login = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    reset: () => loginInitialState,
    setDetails: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
})

export const { setDetails, logoutUser } = login.actions
export default login.reducer
