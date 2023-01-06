import './Quiz.css'
import undraw_adventure from '../../assets/undraw_adventure.svg'
import Question from '../Question/Question'
import Options from '../Options/Options'
import { useSelector, useDispatch } from 'react-redux'
import { next } from '../../redux/slice/play'
import { getCountrys } from '../../redux/thunk/getCountrys'

function Quiz() {

  const dispatch = useDispatch()

  const pased = useSelector(e => e.play.pased)
  const played = useSelector(e => e.play.played)

  const handleNext = () => {
    dispatch(next(pased))
    dispatch(getCountrys())
  }

  return (
    <div className='Quiz'>
      <div className='Quiz_top'>
        <img src={undraw_adventure} alt="" />
      </div>
      <Question />
      <Options />
      <div className={played === true ? 'Quiz_bottom' : 'Quiz_bottom desactive'}>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz