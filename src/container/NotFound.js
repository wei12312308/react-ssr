import React from 'react'
import {Route} from 'react-router-dom'
import { log } from 'util';

function Status({code, children}) {
    return <Route render={
        ({staticContext}) => {
            console.log(staticContext);
            
            if(staticContext) {
                staticContext.statusCode = code;
            }
            return children;
        }
    }></Route>
}


export default function NotFound(props) {
    console.log(props);
    
    return <Status code={404}>
        <div>
        404</div>
    </Status>
}