import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter, NavLink, Switch } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const TodoList = lazy(() => import('./todos-list'));
const Create = lazy(() => import('./create'));
const NotFound = lazy(()=> import('./not-found'));
const Todo = lazy(()=> import('./todo'));


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
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/notf">NotFound</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Switch>
                        <Route path="/todos" exact component={TodoList} />
                        <Route path="/todos/:index" component={Todo} />
                        <Route path="/create" component={Create} />
                        <Route exact path="/" render={_=><Redirect to="/todos"/>} />
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
