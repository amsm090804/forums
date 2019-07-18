import React, { Component } from 'react';
import classes from './Sekindo.css';

class Sekindo extends Component {
    state = {
        guid: '1'
    }

    createGuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    componentDidMount() {
        this.setState({
            guid: this.createGuid()
        })

        const script = document.createElement("script");

        script.src = "https://live.sekindo.com/live/liveView.php?s=96114&cbuster=[CACHE_BUSTER]&pubUrl=patrioti.co.il";
        script.async = true;
        script.type = "text/javascript";
        script.language = "javascript";

        document.getElementById(this.state.guid).appendChild(script);
    }

    render() {
        return <li className={classes.advertisingContainer}><div id={this.state.guid} className={classes.advertising}></div></li>;
    }
}

export default Sekindo;