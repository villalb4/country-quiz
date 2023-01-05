import './Quiz.css'
import undraw_adventure from '../../assets/undraw_adventure.svg'
import Question from '../Question/Question'
import Options from '../Options/Options'

function Quiz() {
  return (
    <div className='Quiz'>
      <div className='Quiz_top'>
        <img src={undraw_adventure} alt="" />
      </div>
      <Question />
      <Options />
    </div>
  )
}

export default Quiz