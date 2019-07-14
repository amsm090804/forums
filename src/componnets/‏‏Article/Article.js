import React from 'react'
import classes from './Article.css';

const Article = (props) => {

    return <li className={classes.Article} key={props.article.guid}>{props.article.title}</li>;
}

export default Article;