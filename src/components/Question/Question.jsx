// import React, { useEffect } from 'react'
import './Question.css'
import { useSelector } from 'react-redux'
// import { setQuestion } from '../../redux/slice/question'

function Question() {

  const data = useSelector(e => e.question.question)

  return (
    <div className='Question'>
      {data ? 
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
          <div className='Question_divOptions'>
            {data?.options?.map((e, i) => {
              return <div key={i} className="Question_divOption">
                <div className='Question_divLetter'>
                  <span className='Question_letter'>{data.letters[i]}</span>
                </div>
                <p className='Question_option'>{e.name}</p>
              </div>
            })}
          </div>
        </div> 
        : "cargando"
      }
    </div>
  )
}

export default Question