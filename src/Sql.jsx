import img_fiesta from './fondo_fiesta.png'
function Sql () {
  return (
    <div className="sql-section">
      <div className="sql-section-section-container">
        <img src={img_fiesta} alt="img_fiesta" className='image_sql_section'/>
      </div>
      <div className="sql-section-section-container sql-query-container">
        <div className='sql-query'>
          <div className='select'>
            <span className='reserved_query_words'>select</span>
            <span className='normal_query_words'>name <span style={{color: '#ff5f73'}}>as</span> 'FELICIDADES'</span>
          </div>
          <div className='from'>
            <span className='reserved_query_words'>from</span>
            <span className='normal_query_words'>cool_people</span>
          </div>
          <div className='where'>
            <span className='reserved_query_words'>where</span>
            <span className='normal_query_words'><span style={{color: '#ff5f73'}}>DAY</span>([DATE OF BIRTH]) = <span style={{color: '#ff5f73'}}>DAY</span>(<span style={{color: '#c18ee3'}}>GETDATE</span>())</span>
          </div>
          <div className='and'>
            <span className='reserved_query_words'>and</span>
            <span className='normal_query_words'><span style={{color: '#ff5f73'}}>MONTH</span>([DATE OF BIRTH]) = <span style={{color: '#ff5f73'}}>MONTH</span>(<span style={{color: '#c18ee3'}}>GETDATE</span>())</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sql