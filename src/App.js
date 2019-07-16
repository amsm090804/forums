import React, { Component } from 'react';
import classes from './App.css';
import  Initialize from './Initialize/Initialize';
import { BrowserRouter } from 'react-router-dom';
import Start from './componnets/Start/Start';
import Homepage from './componnets/Homepage/Homepage';

class App extends Component {

    state = {
        apiStart: {
            "react":{"versionnumber":"3.4","isupdate":true,"isforceupdate":true,
                "addmob":{"bundleid":"il.co.patrioty.NewsApp","app":"ca-app-pub-7571236869931205~5067219036","unit":"ca-app-pub-7571236869931205/5614013943"}},
            "apidata":"https://www.patrioti.co.il/api/Report/applicationjson",
            "opentext":"פורום חדשות ישראלי",
            "opentextcolor":{"r":"31","g":"73","b":"139"},
            "opentextbackgroundcolor":{"r":"242","g":"242","b":"242"},
            "img": "https://www.patrioti.co.il/favicon.ico"
        },
        start: true,
    }

    render() {
        let startObj = null;
        if (this.state.start) {
            //startObj = (<Start img={this.state.apiStart.img}
            //    opentext={this.state.apiStart.opentext}
            //    opentextcolor={this.state.apiStart.opentextcolor}
            //    opentextbackgroundcolor={this.state.apiStart.opentextbackgroundcolor}
            //    setEnd={this.setStartEnd}
            //></Start>);
            //
            startObj = (<Homepage />);
        }
        else {
            startObj = (<Homepage/>);
        }

        return (
        <BrowserRouter>
        <div>
            {startObj}
        </div>
        </BrowserRouter>);
    }
}

export default App;