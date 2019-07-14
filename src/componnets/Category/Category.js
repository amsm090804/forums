import React from 'react'
import classes from './Category.css'

import Articles from '../Articles/Articles';

const Category = (props) => {
    let category = props.category;
    let picture = category.picture ? <img className={classes.Category_img} src={category.picture + '?width=40&height=40&mode=stretch'} /> : null;
    // take the amount items to show.
    let reports = category.reports.slice(0, props.category.application.itemstoshow).map(report => {
        return report;
    });

    let styleTitle = {
        backgroundColor: 'rgba(' + category.application.r + ',' + category.application.g + ',' + category.application.b + ', 1.0)',
    }

    return <li
        className={classes.Category}
        key={category.guid}>
        <div className={classes.Category_title} style={styleTitle}>{picture}<span>{category.name}</span></div>        
        <Articles articles={reports} />
            </li>;
}

export default Category;