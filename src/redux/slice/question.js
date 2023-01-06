import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: {}
}

export const questionSlice = createSlice({
  name: 'question',
  initialState ,
  reducers: {
    setQuestion: function(state, action) {
      const countrys = action.payload

      // generar tipo de pregunta
      const typeQuestion = ["flag", "capital"][Math.floor(Math.random() * 2)]

      // obetener las 4 opciones
      const random = [...countrys].sort(() => Math.random() - 0.5) // mezcla el array
      const options = [0,1,2,3].map(e => random[e]).sort(() => Math.random() - 0.5)
      const letters = ["A", "B", "C", "D"]

      const question = typeQuestion === "flag" 
        ? "Which country does this flag belong to?" 
        : `${options[0].capital[0]} is the capital of`
      
      state.question = {
        type: typeQuestion,
        question: question,
        letters: letters,
        options: options,
        correct: random[0],
        flag: random[0].flag
      }
    }
  }
})

export const { setQuestion } = questionSlice.actions
export default questionSlice.reducer
