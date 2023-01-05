import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  countrys: [],
  quesiton: {}
}

export const questionSlice = createSlice({
  name: 'question',
  initialState ,
  reducers: {
    setCountrys: function(state, action) {
      state.countrys = action.payload
    },
    setQuestion: function(state, action) {
      // obetener pais para crear la pregunta
      const index = action.payload
      const country = current(state.countrys[index])

      // generar tipo de pregunta
      const typeQuestion = ["flag", "capital"][Math.floor(Math.random() * 2)]

      // obetener 3 paises mas para la pregunta

      // const others = [0, 1, 2].map(e => current(state.countrys[e])).sort(() => Math.random() - 0.5)
      // console.log(others)

      // const others = 

    }
  }
})

export const { setQuestion, setCountrys } = questionSlice.actions
export default questionSlice.reducer
