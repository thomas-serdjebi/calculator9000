import Calculator from './Calculator';
import React from 'react';

function ItsOverNineThousand(result) {
    return(
        <div>
        {result.result > 9000 && 
            <p>Its Over 9000!</p>}
        </div>
    )
}

export default ItsOverNineThousand