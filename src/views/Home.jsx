import './Home.css';
import Quiz from '../components/Quiz/Quiz';
import CreatedBy from '../components/CreatedBy/CreatedBy';

function Home() {
  return (
    <div className="Home">
      <h1>COUNTRY QUIZ</h1>
      <Quiz />
      <CreatedBy />
    </div>
  );
}

export default Home;
