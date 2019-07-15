import React from 'react'
import classes from './DateFormat.css';

const DateFormat = (props) => {
    const dateFormat = require('dateformat');

    let d = parseInt(props.date.replace('/Date(', '').replace(')/', ''));
    let now = new Date();
    let date = new Date(d);

    var diff = now - date;
    var minutes = Math.floor((diff / 1000) / 60);
    let text = '';

    if (minutes <= 30) {
        text = 'עודכן עכשיו';
    }
    else if (minutes <= 60) {
        text = 'עודכן בשעה האחרונה';
    }
    else if (minutes <= 24 * 60 && now.getDay() === date.getDay()) {
        text = 'עודכן היום ב: ' + dateFormat(date, "HH:MM");
    }
    else if (minutes <= 24 * 60) {
        text = 'עודכן אתמול ב: ' + dateFormat(date, "HH:MM");
    }
    else {
        text = dateFormat(date, "yyyy:mm:dd HH:MM");
    }

    return <span className={props.className}>{text}</span>;
}

export default DateFormat;