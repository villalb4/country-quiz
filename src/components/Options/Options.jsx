import './Options.css'
import { useSelector } from 'react-redux'

function Options() {

  const data = useSelector(e => e.question.question)

  return (
    <div className='Options'>
      <div className='Options_divOptions'>
        {data?.options?.map((e, i) => {
          return <div key={i} className="Options_divOption">
            <div className='Options_divLetter'>
              <span className='Options_letter'>{data.letters[i]}</span>
            </div>
            <p className='Options_option'>{e.name}</p>
          </div>
        })}
      </div>
    </div> 
  )
}

export default Options