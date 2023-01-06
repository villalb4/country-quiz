import './Game.css';
import Quiz from '../../components/Quiz/Quiz';
import CreatedBy from '../../components/CreatedBy/CreatedBy';

function Home() {
  return (
    <div className="Home">
      <div className='Home_divContent'>
        <h1>COUNTRY QUIZ</h1>
        <Quiz />
        <CreatedBy />
      </div>
    </div>
  );
}

export default Home;
