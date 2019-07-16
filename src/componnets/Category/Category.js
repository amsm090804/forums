import React from 'react'
import classes from './Category.css'

import Articles from '../Articles/Articles';
import * as FontAwesome from 'react-icons/fa';

const Category = (props) => {
    let category = props.category;
    // take the amount items to show.
    let reports = category.reports;
    if (!props.showAllArticle) {
        reports = category.reports.slice(0, props.category.application.itemstoshow).map(report => {
            return report;
        });
    }

    let picture = category.picture ? <img alt={category.name} className={classes.Category_img} src={category.picture + '?width=40&height=40&mode=stretch'} /> : null;
    let styleTitle = {
        backgroundColor: 'rgba(' + category.application.r + ',' + category.application.g + ',' + category.application.b + ', 1.0)',
    }
    let styleTitleName = category.picture ? {} : {
        width: '84%',
    }

    let fontAwesome = props.showAllArticle ? <FontAwesome.FaBackward className={classes.Category_title_back}
        onClick={(event) => props.categoryBackClick(event, category.guid)} /> : null;

    return <li
                className={classes.Category}
                key={category.guid}>
                <div 
                    className={classes.title}
            style={styleTitle}>
            {picture}
            <div className={classes.Category_title_name}
                style={styleTitleName}
                onClick={(event) => props.categoryClick(event, category.guid)}><span>{category.name}</span>
            </div>
                    {fontAwesome}
                </div>
        <Articles
            articles={reports}
            averagecount={props.averagecount} />
            </li>;
}

export default Category;