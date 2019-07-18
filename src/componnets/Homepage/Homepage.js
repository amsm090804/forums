import React, { Component } from 'react';
import classes from './Homepage.css';
import Category from '../../containers/Category/Category';
import FullArticle from '../../componnets/FullArticle/FullArticle';
import { Route, Link, Switch } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Category} />
                    <Route path="/:id" exact component={FullArticle} />
                </Switch>

            </div>
        );
    }
}

export default Homepage;