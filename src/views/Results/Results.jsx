import React from 'react'
import './Results.css'
import CreatedBy from '../../components/CreatedBy/CreatedBy'
import winners from '../../assets/undraw_winners.svg'
import { useSelector, useDispatch } from 'react-redux'
import { getCountrys } from '../../redux/thunk/getCountrys'
import { restart } from '../../redux/slice/play'


function Results() {

  const score = useSelector(e => e.play.score)

  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(restart())
    dispatch(getCountrys())
  }

  return (
    <div className='Results'>
      <h1>COUNTRY QUIZ</h1>
      <div className='Results_body'>
        <div className='Results_divImg'>
          <img src={winners} alt="" />
        </div>
        <h2>Results</h2>
        <p className='Results_score'>You got <span className='Results_number'>{score}</span> correct answers</p>
        <div className='Results_divButton'>
          <button onClick={handleRestart}>Try again</button>
        </div>
      </div>
      <CreatedBy />
    </div>
  )
}

export default Results