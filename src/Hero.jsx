function Hero () {
  return (
    <div className="image_bg">
      <div className="hero_img_kudos_container">
        <div className="hero_img_rows">
          <span className="hero_title hero_title_exclamation">¡ </span>
          <span className="hero_title" style={{color: '#fe7256', paddingLeft: '20px'}}>Feeeliz</span>
          <span className="hero_title" style={{color: '#fbd86b', paddingLeft: '30px'}}>  Cumpleaños</span>
        </div>
        <div className="hero_img_rows">
          <span className="hero_title" style={{color: '#c18ee3', paddingLeft: '15px'}}>Ciudad</span>
          <span className="hero_title" style={{color: '#b0f566', paddingLeft: '15px'}}>de</span>
          <span className="hero_title" style={{color: '#ff5f73', paddingLeft: '15px'}}>los</span>
          <span className="hero_title" style={{color: '#ff9300', paddingLeft: '15px'}}>24</span>
          <span className="hero_title" style={{color: '#4af2a1', paddingLeft: '15px'}}>años</span>
          <span className="hero_title hero_title_exclamation" style={{paddingLeft: '15px'}}>!</span>
        </div>
      </div>
    </div>
  )
}
export default Hero