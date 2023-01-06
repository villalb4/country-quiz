import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pased: null,
  played: false,
  gameOver: false,
  score: 0,
}

export const playSlice = createSlice({
  name: 'play',
  initialState: initialState,
  reducers: {
    setPased: function(state, action) {
      state.pased = action.payload
      state.played = true
    },
    next: function(state, action) {
      state.pased = null
      state.played = false
      action.payload === false ? state.gameOver = true : state.score = state.score + 1
    },
    restart: function(state, action) {
      state.pased = null
      state.played = false
      state.gameOver = false
      state.score = 0
    }
  }
})

export const { setPased, next, restart } = playSlice.actions
export default playSlice.reducer
