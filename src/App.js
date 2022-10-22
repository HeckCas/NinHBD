import './App.css';
import Hero from './Hero.jsx'
import Sql from './Sql.jsx'
import Term from './Terminal.jsx'
function App() {
  return (
    <div>
      <header >
        <Hero />
      </header>
      <section>
        {/* <img src={Cake} alt="cake" /> */}
        <Sql />
      </section>
      <section style={{marginTop: '5%'}}>
        <Term />
      </section>
    </div>
  );
}

export default App;
