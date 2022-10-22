import React, {useState} from 'react';
import Memellery from './Memellery.jsx'
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const Term = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([<TerminalOutput>
    <h3 style={{marginTop: '0'}}>🎉 🥳 Bienvenida a tu terminal de cumpleaños 🎊 🎁 🎂</h3>
    <h4 style={{margin: '10px 0'}}>Tienes pocas opciones de comandos 😅</h4>
    <h4 style={{margin: '10px 0'}}>Y se puede hacer Scroll sobre la terminal</h4>
    <h5 style={{margin: '10px 0'}}>Para poner un comando tienes que escribirlo exactamente igual sin las comillas</h5>
    <ul>
      <li>"hola" -{'>'} Te saluda</li>
      <li>"chisme" -{'>'} Te cuenta un chisme</li>
      <li>"meme" -{'>'} Meme</li>
      <li>"video" -{'>'} Te enseña un video bien perrón</li>
      <li>"read_letter + la fecha que nos conocimos" -{'>'} Lee tu carta de cumpleaños. <br /> El comando sería algo como "read_letter 2022-10-27" <br /> Pero eso no es la fecha correcta :v</li>
      <li>"clear" -{'>'} Deja todo limpio y empiezas de nuevo</li>
    </ul>
  </TerminalOutput>]);
  const handleType = (terminalInput) => {
    if (terminalInput === 'hola') {
      setTerminalLineData([<TerminalOutput>🎉 🥳 Wooolas Nini, Espero tengas un muy muy Feliz cumpleaños!!  🎊 🎁 🎂
        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'chisme'){
      setTerminalLineData([<TerminalOutput> Niruka no te va a contar na' porque no eres Vedette, Bailas?
        <br />
        <br />

      <img src="https://i1.sndcdn.com/artworks-000569523569-76dkeh-t500x500.jpg" alt="bailas?" width={150} height={150}/>

        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'meme'){
      setTerminalLineData([<TerminalOutput>
        <br />
        <br />

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI1tKWKVUAyLAyBULy_8BUXyk_cdj2WjfkEaBPo7In42VQ5GF7JWvo8jPGDqUqEYkjKE&usqp=CAU" alt="cara" width={150} height={150}/>

        <br />
        <h4>Digo!</h4>
        <br />
          <Memellery />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'carta'){
      setTerminalLineData([<TerminalOutput> No te cuento na' porque no eres Vedette, Bailas?
        <br />
        <br />

        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'video'){
      setTerminalLineData([<TerminalOutput>
        <br />
        <br />

        <iframe width="560" height="315" src="https://www.youtube.com/embed/wfo_WFLxisM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'clear'){
      setTerminalLineData([<TerminalOutput>
        <h3 style={{marginTop: '0'}}>🎉 🥳 Bienvenida a tu terminal de cumpleaños 🎊 🎁 🎂</h3>
    <h4 style={{margin: '10px 0'}}>Tienes pocas opciones de comandos 😅</h4>
    <h4 style={{margin: '10px 0'}}>Y se puede hacer Scroll sobre la terminal</h4>
    <h5 style={{margin: '10px 0'}}>Para poner un comando tienes que escribirlo exactamente igual sin las comillas</h5>
        <ul>
      <li>"hola" -{'>'} Te saluda</li>
      <li>"chisme" -{'>'} Te cuenta un chisme</li>
      <li>"meme" -{'>'} Meme</li>
      <li>"video" -{'>'} Te enseña un video bien perrón</li>
      <li>"read_letter + la fecha que nos conocimos" -{'>'} Lee tu carta de cumpleaños. <br /> El comando sería algo como "read_letter 2022-10-27" <br /> Pero eso no es la fecha correcta :v</li>
      <li>"clear" -{'>'} Deja todo limpio y empiezas de nuevo</li>
    </ul>
      </TerminalOutput>])
    } else {
      setTerminalLineData([<TerminalOutput>
        <br />
        <br />

        <p> Ups! Pusiste {terminalInput} y no hay ese comando 👎🏽 </p>

        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    }
  }
  return (
    <div className="terminal_container">
      <Terminal name='¡Feliz Cumpleaños! 🎊' colorMode={ ColorMode.Dark }  onInput={ terminalInput => handleType(terminalInput) } prompt="🤖 👉🏽">
        { terminalLineData }
      </Terminal>
    </div>
  )
}
export default Term;