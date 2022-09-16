function GreatOperationButton(props){
  return (
    <div className="operators">
      <button onClick={props.handleClick} value="+">+</button>
      <button onClick={props.handleClick} value="-">-</button>
      <button onClick={props.handleClick} value="*">*</button>
      <button onClick={props.handleClick} value="/">/</button>
      <button onClick={props.handleClick} value="DEL">DEL</button>
    </div>
  ) 
}

export default GreatOperationButton