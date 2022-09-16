import AmazingNumberButton from './AmazingNumberButton'
import BeautifulScreen from './BeautifulScreen'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import React, { useState } from 'react';
import ItsOverNineThousand from './ItsOverNineThousand'
import PowerfullSaveButton from './PowerfullSaveButton'

function Calculator(props){

  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')
  const [op, setOp] = useState('')

  function handleClick(props) {

    let event = props.target.value

    if (result == '' ) {
     
      switch(event) {

        case '=':
          setOperation(operation+event)
          setOp(operation+event)
          let opRes = eval(operation)
          setOperation(opRes)
          setResult(opRes)
        break;

        case 'DEL':
          setOperation('')
          setResult('')
        break;

        default:
          setOperation(operation+event)
        break;

      } 
    } else {

      switch(event) {

        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '.':
          setResult('')
          setOperation(event)
        break;

        case 'DEL':
          setOperation('')
          setResult('')
        break;

        
        case 'SAVE' : 

          console.log(op)
          console.log(result)

          let data = new FormData()
          data.append('operation', op)
          data.append('result', result)

          console.log(data)

          fetch('http://localhost/calculator9000/src/php/save.php', {
            method: 'POST',
            body: data
          }).catch(function (error) {
            console.warn('Something went wrong.', error);
          });
          
        break;

        default:
          setResult('')
          setOperation(operation+event)
        break;

      }
    }
  }

  function Save(props){
    console.log('SAVE')

  }
 
  return (
  <div className="App">
    <ItsOverNineThousand  result={result}/>
    <div className="calculator">
      <BeautifulScreen operation={operation}/>
      <GreatOperationButton handleClick={handleClick}/>
      <div className="digits">
        <AmazingNumberButton handleClick={handleClick}/>
        <MagnificientEqualButton handleClick={handleClick}/>
        <PowerfullSaveButton handleClick={handleClick}/>
      </div>
    </div>
  </div>
  ) 
}

export default Calculator;
  