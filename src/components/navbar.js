import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import TodoList from './todos-list';
import Create from './create';

export default function Navbar() {
    return (
        <div className="container">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link"  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/create">Create</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/create">Create</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Route path="/" exact component={TodoList} />
                <Route path="/create" exact component={Create} />
            </BrowserRouter>
        </div>
    )
}
