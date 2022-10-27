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
      <li>"carta_+la fecha que comiste enfrijoladas(En formato YYYY-MM-DD)_+tu comida fav" -{'>'} <br />
      Lee tu carta de cumpleaños. <br /> El comando sería algo como "carta_2022-10-27_comida"  cada dato separado con guiones bajos<br /> Pero eso no es la fecha correcta :v ni el nombre de tu comida fav<br />
      Si no te lo sabes a las 6:00 pm te doy la respuesta jajaja. If si sabes, ganas!
      </li>
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
    } else if (terminalInput.startsWith('carta')){
      if (terminalInput.split('_')[1] !== '2022-03-27') {
        setTerminalLineData([<TerminalOutput> La fecha está mal jaja 🚫
          <br />
          <br />
          <br />
        Recuerda que escribiendo "clear" te muestra lo que puedes hacer
          <br />
          <br />
        </TerminalOutput>])
      }
      else if (terminalInput.split('_')[2] !== 'lasagna') {
        setTerminalLineData([<TerminalOutput> No te sabes tu cmoida fav? O la esccribiste mal 🚫
          <br />
          <br />
          <br />
        Recuerda que escribiendo "clear" te muestra lo que puedes hacer
          <br />
          <br />
        </TerminalOutput>])
      } else if (terminalInput.split('_')[2] === 'lasagna' && terminalInput.split('_')[1] === '2022-03-27') {
        setTerminalLineData([<TerminalOutput>
        <br />
        <p>Hooooli Nini!</p>
        <br />
        Que onda eh! Si te acordaste de la fecha!
        <br />
        Bueno, primero que nadaaa! Obvio 🎊 Feeeliz Cuumple!! 🎉 Que onda! Ya cumpliste 24! 🥺
        <br />
        Y pues, mirate! 🤩
        <br />
        <br />
        <br />
        Has logrado Muchísimo! Te has rifado como pocos! La Neta! Quisiera que hoy tomaras un momento 
        <br />
        para en serio ver de retrospectiva todo lo que ha cambiado tu mundo para bien! Me encanta que 
        <br />
        nunca te has rendido para buscar tu camino. 🏃🏻‍♀️ Has tenido muchísimos bloqueos y contratiempos pero 
        <br />
        aún así siempre te has levantado! 🆙 Y siempre le has avanzado dando lo mejor que puedes
        <br />
        <br />
        <br />
        Es obvio que no ha sido sencillo, de hecho ha sido bastante complicado, y has tenido momentos de esos 
        <br />
        que construyen al personaje jajaja pero quiero recordarte que tienes muchas cualidades increíbles de esas 
        <br />
        que hacen que una persona sea inolvidable! Para empezar, eres valiente! 🏹 Cuando cambiaste de trabajo a algo
        <br />
        totaaalmente diferente a lo que estabas acostumbrada decidiste derribar tu zona de comfort por completo 
        <br />
        para buscar hacer eso que de verdad te hace feliz y te llena, 🏋🏻‍♀️ eso es digno de un aplauso! 
        <br />
        No, de 2 aplausos! jaja 👏🏽
        <br />
        <br />
        <br />

        Siempre estás en busqueda de conocer de todo! y entiendes que el conocimiento es liberación y que entender 
        <br />
        el contexto de ti y de los demás te hace más sabia 🧙🏻‍♀️ como maga bueno, bruja!, sabes cuando cambiar de opinión 
        <br />
        con base en hechos y eso es de admirarse, en serio que te rifas! Quisiera que lo veas como yo lo veo. 
        <br />
        Obvio espero mucho de ti! No lo digo por decir y no es presión para nada, para empezar ni a mi ni a nadie nos debes 
        <br />
        naaaada y menos nos tienes que demostrar algo, al contrario, todo hacia ti! Demuestrate tú como has cambiado 
        <br />
        y lo mucho que has crecido y creo que es muy notorio, no? En este año tu vida dió muchas vueltas ⏰
        <br />
        y sólo puedo decir que los que te hemos visto en tu cambio nos llenamos de orgullo, por lo que haces, 
        <br />
        por como eres y por como creces en la vida.
        <br />
        <br />
        <br />

        Por eso es que más que esperar de ti, sé que llegarás muy lejos, obvio te falta mucho camino, conocimiento y 
        <br />
        experiencias que tengas que pasar, pero ahí la llevas, sé que en ocasiones crees que las decisiones que tomas
        <br />
        no son las mejores, pero algo es seguro no es la primera ni ultima vez que tomes una mala decisión, pero vas bien!
        <br />
        Me encanta ver como agarraste seguridad para estar confiada en lo que haces y más al saber que pudiste pasar una 
        <br />
        entrevista técnica de otro lugar. Has crecido mucho en este poco tiempo y crecerás más, quisiera ver como maduras,
        <br />
        como cambias y te adaptas y como te vas rifando en tu vida :). Sería todo un honor!
        <br />
        <br />
        <br />

        Tienes la personalidad de una guerrera y un corazón firme y noble que te hace preocuparte por los demás y no solo por ti, 
        <br />
        enctonces, no dudes que todo eso te llevará lejos!
        <br />
        <br />
        <br />

        ¡Feliz cumpleaños Nin! Este año (23) de tu vida que acaba, dejaste una etapa donde aprendiste mucho,
        <br />
        una etapa que tal vez no fue la mejor, pero que sin duda aprendiste de ella para que ahora estés justo 
        <br />
        empezando tu mejor momento y si en ocasiones sientes que te falta confianza en ti misma, usa la mía, 
        <br />
        usa la confianza que yo tengo en ti! :)
        <br />
        <br />
        <br />

        Cuídate mucho bruja de la noche! Te quiero 💜. Gracias por soportarme después de tanto! 
        <br />
        Sé que no he sido la mejor persona contigo y diuna vez te digo again que, ¡PERDÓN! En 🥣!
        <br />
        Te quiero Nin. Espero algún día..
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        Pd. Me gusta tu lunar! 🌙
        <br />
        <br />
        <br />
        Pd2. Noma! 24 años! Tas vieeja! Pero aún te queda un año antes que todo empiece en picada GGG
        <br />
        <br />
        <br />
        Pd3. Te debo un regalo :), pero será cuando pronuncies las palabras mágicas jaja 🔮
        <br />
        <br />
        <br />
        <br />
        Pd4. Me tienes que decir la palabra clave "pandas" para saber que lograste decifrar la contraseña y leiste bien tu carta :) jaja
        <br />
        <br />
        <br />
        Quería hacer esto como de retos y así, pero por tiempo no pude, disculpame 
        <br />
        pero si te dejo tarea :) tienes que correr el siguiente código y hacer 
        <br />
        un wordcloud de las palabras más usadas en tu carta de cumpleaños
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="./hbd.zip" download className='link_descarga'> Descarga el zip de archivos, aquí</a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      Recuerda que escribiendo "clear" te muestra lo que puedes hacer
        <br />
        <br />
        </TerminalOutput>])
      }
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
      <li>"carta_+la fecha que comiste enfrijoladas(En formato YYYY-MM-DD)_+tu comida fav" -{'>'} <br />
      Lee tu carta de cumpleaños. <br /> El comando sería algo como "carta_2022-10-27_comida"  cada dato separado con guiones bajos<br /> Pero eso no es la fecha correcta :v ni el nombre de tu comida fav<br />
      Si no te lo sabes a las 6:00 pm te doy la respuesta jajaja. If si sabes, ganas!
      </li>
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