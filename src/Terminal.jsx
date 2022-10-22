import React, {useState} from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const Term = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([<TerminalOutput>
    <h1>🎉 🥳 Bienvenida a tu terminal de cumpleaños 🎊 🎁 🎂</h1>
    <h4>Tienes pocas opciones de comandos 😅</h4>
    <h4>Y se puede hacer Scroll sobre la terminal</h4>
    <h5>Para poner un comando tienes que escribirlo exactamente igual sin las comillas</h5>
    <ul>
      <li>"Hola" -{'>'} Te saluda</li>
      <li>"chisme" -{'>'} Te cuenta un chisme</li>
      <li>"video" -{'>'} Te enseña un video bien perrón</li>
      <li>"read_letter + la fecha que nos conocimos" -{'>'} Lee tu carta de cumpleaños. <br /> El comando sería algo como "read_letter 2022-10-27" Pero eso no es la fecha correcta :v</li>
      <li>"clear" -{'>'} Deja todo limpio y empiezas de nuevo</li>
    </ul>
  </TerminalOutput>]);
  const handleType = (terminalInput) => {
    if (terminalInput === 'hola') {
      setTerminalLineData([<TerminalOutput>🎉 🥳 Wooolas Nini, Espero tengas un muy muy Feliz cumpleaños!!  🎊 🎁 🎂
        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muiestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'chisme'){
      setTerminalLineData([<TerminalOutput> No te cuento na' porque no eres Vedette, Bailas?
        <br />
        <br />

      <img src="https://i1.sndcdn.com/artworks-000569523569-76dkeh-t500x500.jpg" alt="bailas?" width={150} height={150}/>

        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muiestra lo que puedes hacer
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
      Recuerda que escribiendo "clear" te muiestra lo que puedes hacer
        <br />
        <br />
      </TerminalOutput>])
    } else if (terminalInput === 'clear'){
      setTerminalLineData([<TerminalOutput>
        <h1>🎉 🥳 Bienvenida a tu terminal de cumpleaños 🎊 🎁 🎂</h1>
        <h4>Tienes pocas opciones de comandos 😅</h4>
        <h4>Y se puede hacer Scroll sobre la terminal</h4>
        <h5>Para poner un comando tienes que escribirlo exactamente igual sin las comillas</h5>
        <ul>
          <li>"hola" -{'>'} Te saluda</li>
          <li>"chisme" -{'>'} Te cuenta un chisme</li>
          <li>"video" -{'>'} Te enseña un video bien perrón</li>
          <li>"read_letter + la fecha que nos conocimos" -{'>'} Lee tu carta de cumpleaños. <br /> El comando sería algo como "read_letter 2022-10-27" Pero eso no es la fecha correcta :v</li>
          <li>"clear" -{'>'} Deja todo limpio y empiezas de nuevo</li>
        </ul>
      </TerminalOutput>])
    }
  }
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal name='Terminal de cumpleaños' colorMode={ ColorMode.Dark }  onInput={ terminalInput => handleType(terminalInput) } prompt="🤙🏼">
        { terminalLineData }
      </Terminal>
    </div>
  )
}
export default Term;