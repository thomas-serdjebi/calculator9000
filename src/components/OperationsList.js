import {useState, useEffect} from 'react';

function OperationsList(props) {

    const[result,setResult] = useState([])

    const getData = async () => {
        fetch('http://localhost/calculator9000/src/php/operations.php')
        .then(response => response.json())
        .then(response => {
            console.log(response)
           setResult(response)
        })
        
    }

    useEffect(() => {
      getData();
    },[result])
    
    return(
        <div className="operations-list">
            <h2>Results saved</h2>
                {result.map((res) => (
                    <ul>
                        <li>
                            {res.operation} = {res.result}
                        </li>
                    </ul>
                ))}
        </div>
    )
}

export default OperationsList