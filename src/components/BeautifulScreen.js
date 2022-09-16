
import Calculator from './Calculator'

function BeautifulScreen(props) {
  return (
    <div className="display">
      <p>{props.operation}</p>
    </div>
  ) 

}

export default BeautifulScreen