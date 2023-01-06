import './Options.css'
import { useSelector } from 'react-redux'
import check from '../../assets/check.svg'
// import cancel from '../../assets/cancel.svg'

function Options() {

  const data = useSelector(e => e.question.question)

  const handleSelect = (e) => {
    const optionChecked = e.target.firstChild.accessKey
    if(optionChecked === data.correct.name) {
      console.log("correcto")
    } else {
      console.log("malll")
    }
  }

  return (
    <div className='Options'>
      <div className='Options_divOptions'>
        {data?.options?.map((e, i) => {
          return <div key={i} className="Options_divOption" onClick={handleSelect}>
            {/* Letter (a,b,c or d) and country name */}
            <div className='Options_div' accessKey={e.name}>
              <div className='Options_divLetter'>
                <span className='Options_letter'>{data.letters[i]}</span>
              </div>
              <div>
                <p className='Options_option'>{e.name}</p>
              </div>
            </div>
            {/* Icon check or cancel */}
            <div className='Options_divIconResult'>
              <img src={check} alt="" />
            </div>
          </div>
        })}
      </div>
    </div> 
  )
}

export default Options