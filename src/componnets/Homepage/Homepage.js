import React from 'react'
import classes from './Homepage.css';

import Category from '../Category/Category';

const Homepage = (props) => {
        let list = null;
    
    if (props.data != null && props.data.data && props.data.data.length > 0) {
        let categories = props.data.data.filter(function (o) { return o.isactive && o.reports.length > 0; });
        console.log(categories);

        list = 
            
                categories.map((category, index) => {
                    return <Category key={category.guid} category={category} />
                })
            
        
    }

    return <ul className={classes.HomePage}>{list}</ul>;
}

export default Homepage;