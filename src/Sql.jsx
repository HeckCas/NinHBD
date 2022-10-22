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
            <span className='normal_query_words'>name as 'FELICIDADES'</span>
          </div>
          <div className='from'>
            <span className='reserved_query_words'>from</span>
            <span className='normal_query_words'>cool_people</span>
          </div>
          <div className='where'>
            <span className='reserved_query_words'>where</span>
            <span className='normal_query_words'>DAY([DATE OF BIRTH]) = DAY(GETDATE())</span>
          </div>
          <div className='and'>
            <span className='reserved_query_words'>and</span>
            <span className='normal_query_words'>MONTH([DATE OF BIRTH]) = MONTH(GETDATE())</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sql