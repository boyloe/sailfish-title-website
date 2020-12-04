import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavBar } from './NavBar'
import { Home } from '../HomePage/Home'

export const NavBarRouting:React.FC = () => {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}