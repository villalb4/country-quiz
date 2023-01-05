// import React, { useEffect } from 'react'
import './Question.css'
import { useSelector } from 'react-redux'
// import { setQuestion } from '../../redux/slice/question'

function Question() {

  const data = useSelector(e => e.question.question)

  return (
    <div className='Question'>
      <div className='Question_divData'>
        <div className='Question_divQuestion'>
          {
            data?.type === "capital" 
              ? <div><p className='Question_question'>{data?.question}</p></div>
              : <div>
                  <div className='Question_divFlag'><img src={data.flag} alt="" /></div>
                  <div><p className='Question_question'>{data?.question}</p></div>
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Question