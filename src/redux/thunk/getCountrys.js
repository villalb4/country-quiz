import { setQuestion, setCountrys } from "../slice/question";

export const getCountrys = () => {
  return async(dispatch, getState) => {
    //obteniendo los paises
    const data = await fetch('https://restcountries.com/v3.1/all')
    const response = await data.json()

    //filtrando los paises para obtener solamente su id, nombre, capital y bandera
    const dataFilter = response.map((e, i) => {
      return {
        id: i,
        name: e.name.common,
        capital: e.capital,
        flag: e.flags
      }
    })

    //obtener random index
    const index = Math.floor(Math.random() * response.length)

    dispatch(setCountrys(dataFilter))
    dispatch(setQuestion(index))
  }
}