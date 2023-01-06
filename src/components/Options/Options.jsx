import { useState } from 'react'
import './Options.css'
import { useSelector, useDispatch } from 'react-redux'
import check from '../../assets/check.svg'
import cancel from '../../assets/cancel.svg'
import { setPased } from '../../redux/slice/play'

function Options() {

  const data = useSelector(e => e.question.question)

  const dispatch = useDispatch()

  const pased = useSelector(e => e.play.pased)
  const [chosen, setChosen] = useState(null)

  const handleSelect = (e) => {
    setChosen(e.target.accessKey)
    if(e.target.accessKey === data.correct) {
      dispatch(setPased(true))
    } else {
      dispatch(setPased(false))
    }
  }

  return (
    <div className='Options'>
      <div className='Options_divOptions'>
        {data?.options?.map((e, i) => {
          return(
            <div 
              key={i} 
              className={
                pased === true ?  (
                  e.name === chosen && e.name === data.correct ? "Options_divOption correct" 
                  : "Options_divOption played"
                ) 
                : pased === false ? (
                  e.name === chosen && e.name !== data.correct ? "Options_divOption incorrect"
                  : e.name === data.correct ? "Options_divOption correct"
                  : "Options_divOption played"
                )        
                : "Options_divOption" 
              }
              onClick={handleSelect} 
              accessKey={e.name}
            >
              {/* Letter (a,b,c or d) and country name */}
              <div className='Options_div'>
                <div className='Options_divLetter'>
                  <span className='Options_letter'>{data.letters[i]}</span>
                </div>
                <div>
                  <p className='Options_option'>{e.name}</p>
                </div>
              </div>
              {/* Icon check or cancel */}
              <div 
                className={
                  pased === true ?  (
                    e.name === chosen && e.name === data.correct ? "Options_divIconResult correct" 
                    : "Options_divIconResult"
                  ) 
                  : pased === false ? (
                    e.name === chosen && e.name !== data.correct ? "Options_divIconResult incorrect"
                    : e.name === data.correct ? "Options_divIconResult correct"
                    : "Options_divIconResult"
                  )        
                  : "Options_divIconResult" 
                }
              >
                <img className='Options_iconCheck' src={check} alt="" />
                <img className='Options_iconCancel' src={cancel} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div> 
  )
}

export default Options