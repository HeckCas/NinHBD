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
        <Sql />
      </section>
      <section style={{marginTop: '5%'}}>
        <div className='terminal_section'>
          <Term />
        </div>
      </section>
      <section style={{marginTop: '5%'}}>
        <div className='flash-section'>
          <img src="https://i.imgflip.com/6xx1qz.jpg" alt="flash" className='flash-image'/>
        </div>
      </section>
      <footer className='footer' style={{marginTop: '5%'}}>
        <h3 style={{color: 'white'}}>🎊 ¡Feliz cumpleaños Nin, Rifate! 🎉</h3>
        <h6 style={{color: 'white', margin: '0'}}>Se me olvidó que te iba a decir</h6>
      </footer>
    </div>
  );
}

export default App;
