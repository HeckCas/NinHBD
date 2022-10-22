import './card.css'

function Card () {
  return (
    <div className="birthdayCard">
<div className="cardFront">
  <div className="front-text">
  <h3 className="happy">¡¡¡¡¡Feeeeeeliz</h3>
  <h2 className="bday">Cuuumple</h2> 
  <h3 className="toyou">Nini!!!!!!</h3>  
  </div>
  <div className="wrap-deco">
<div className="decorations"></div>
<div className="decorationsTwo"></div>
  </div> 
    <div className="wrap-decoTwo">
<div className="decorations"></div>
<div className="decorationsThree"></div>
  </div>
  <div className="plate">
    <div className="cake"></div>
    <div className="flame"></div>
  </div>
</div>
  
  <div className="cardInside">
     <div className="inside-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">Ninis!</h3>  
  </div>
    <div className="wishes">
    <p>Dear Friend,</p>
    <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
    <p className="name">xxx</p>
    </div>
  </div>
</div>
  )
}
export default Card
