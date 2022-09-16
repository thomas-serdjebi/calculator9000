function AmazingNumberButton(props){

  let i = 1 ;
  let digits = [] ;
  
  for(i= 1 ; i <= 9 ; i++) {
    digits.push(
    <button 
      key={i} 
      id={i} 
      onClick={props.handleClick} value={i}>{i}
    </button>)
  }

  return (
    <>
      {digits}
      <button onClick={props.handleClick} value={0}>0</button>
      <button onClick={props.handleClick} value='.'>.</button>
    </>
  )
}

export default AmazingNumberButton