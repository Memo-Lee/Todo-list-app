import React from 'react'
import "./styles.css";
import {useRouteMatch} from 'react-query';
import {Link,Routes,Route} from 'react-router-dom';

import Home from './Home';
import Todos from './Todos';

function User() {
    const {path,url} = useRouteMatch();
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={url}>Home</Link>
                </li>
                <li>
                    <Link to={`${url}/todos`}>Todos</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route exact path={path}>{Home}</Route>
            <Route path={`${path}/todos`}>{Todos}</Route>
        </Routes>
    </div>
  )
}

export default User
