import React, { Component } from 'react';
import classes from './App.css';
import  Initialize from './Initialize/Initialize';
import  Start from './Start/Start';


class App extends Component {
    state = {
        orders: [
            {name: "AAA",age: "900", id: 1},
            {name: "BBB",age: "200", id: 2}
            ],
        showList: true,
        apiStart: {
            "react":{"versionnumber":"3.4","isupdate":true,"isforceupdate":true,
                "addmob":{"bundleid":"il.co.patrioty.NewsApp","app":"ca-app-pub-7571236869931205~5067219036","unit":"ca-app-pub-7571236869931205/5614013943"}},
            "apidata":"https://www.patrioti.co.il/api/Report/applicationjson",
            "opentext":"פורום חדשות ישראלי",
            "opentextcolor":{"r":"31","g":"73","b":"139"},
            "opentextbackgroundcolor":{"r":"242","g":"242","b":"242"},
            "img": "https://www.patrioti.co.il/favicon.ico"
        }
    }

    changeValue = (val) => {
        this.setState({orders: [
                {name: val,age: "900", id: 1},
                {name: "ZZZ",age: "200", id: 2}
            ]});
    }

    changeValueHandler = (event, id) => {
        const orderIndex = this.state.orders.findIndex(o=> { return o.id === id; });
        const order = {...this.state.orders[orderIndex]};
        order.name = event.target.value;

        const orders = [...this.state.orders];
        orders[orderIndex] = order;

        this.setState({orders: orders});
    }

    toggleListHandler = () => {
        const isShow = this.state.showList;
        this.setState({showList: !isShow});
    }
    deleteOrder= (index) => {
        //const orders = this.state.orders.slice();
        const orders = [...this.state.orders];
        orders.splice(index, 1);
        this.setState(({orders: orders}));
    }

    render(){

        let startList = null;
        let buttonClass='';

        if(this.state.showList){
            startList = (<div>
                {
                    this.state.orders.map((order, index)=>{
                        return <Initialize
                            name={order.name}
                            age={order.age}
                            key={order.id}
                            click={()=>{this.deleteOrder(index)}}
                            changed={(event) => this.changeValueHandler(event, order.id)}
                        />
                    })
                }
            </div>);
            buttonClass=classes.Red;
        }

        let hiClasses = [];//['red', 'bold'].join(' ');
        if(this.state.orders.length>1){
            hiClasses.push( classes.red);
        }
        if(this.state.orders.length<=1){
            hiClasses.push(classes.bold);
        }

      return (
          <Start img={this.state.apiStart.img}
                 opentext={this.state.apiStart.opentext}
                 opentextcolor={this.state.apiStart.opentextcolor}
                 opentextbackgroundcolor={this.state.apiStart.opentextbackgroundcolor}></Start>
      );
    }
}

export default App;