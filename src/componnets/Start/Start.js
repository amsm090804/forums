import React from 'react'
import classes from './Start.css'

const Start = (props) => {
    const opentextcolor = props.opentextcolor;
    const opentextbackgroundcolor = props.opentextbackgroundcolor;

    let style = {
        backgroundImage: 'url("' + props.img +' ")',
    }
    let styleContainer = {
        color: 'rgba(' + opentextcolor.r +',' + opentextcolor.g + ',' + opentextcolor.b + ',1.0)',
        backgroundColor: 'rgba(' + opentextbackgroundcolor.r +',' + opentextbackgroundcolor.g + ',' + opentextbackgroundcolor.b + ',1.0)',
    }

    setTimeout(function () {
        if (props.setEnd) {
            props.setEnd();
        }
    }, 3000);

    return <div>
        <div className={classes.Start} style={style}></div>
        <div className={classes.Container} style={styleContainer}>{props.opentext}</div>
    </div>
}

export default Start;