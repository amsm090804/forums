import React from 'react'
import classes from './Start.css'

const Start = (props) => {
    const img = props.img;
    const opentextcolor = props.opentextcolor;
    const opentextbackgroundcolor = props.opentextbackgroundcolor;

    let style = {
        backgroundImage: 'url("' + img +' ")',
    }
    let styleContainer = {
        color: 'rgba(' + opentextcolor.r +',' + opentextcolor.g + ',' + opentextcolor.b + ',1.0)',
        backgroundColor: 'rgba(' + opentextbackgroundcolor.r +',' + opentextbackgroundcolor.g + ',' + opentextbackgroundcolor.b + ',1.0)',
    }

    return <div>
         <div className={classes.Start} style={style}></div>
        <div className={classes.Container} style={styleContainer}>{props.opentext}</div>
    </div>
}

export default Start;