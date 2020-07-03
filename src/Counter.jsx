import React, { Component } from 'react';
import {connect} from 'react-redux'
import MetaTags from 'react-meta-tags';


import axios from 'axios'

class Counter extends Component {
    componentDidMount(){
        this.getApi()
    }


    getApi = ()=>{
        axios.get('http://www.colr.org/json/color/random').then(res=>{
            this.props.addData(res.data)
        })
    }
    render() {
    console.log(this.props);

        return (
            <div>
                 <MetaTags>
                    <title>COUNTER bro</title>
                    <meta name="description" content="COUNTER COUNTER COUNTER COUNTER COUNTER COUNTER COUNTER COUNTER COUNTER COUNTER " />
                </MetaTags>
                <h1>mesin hitung</h1>
                <p>Count : {this.props.count}</p>
                <button onClick={this.props.onIncreamentClick}>increament</button>
                <button onClick={this.props.onDecrement}>DEC</button>
            </div>
        );
    }
}

// read global state

function mapStatetoProps(state) {
    console.log('mapStatetoProps nya', state);
    return{
        count : state.count
    }
}


// send action/ func 
function mapDispatchtoProps(dispatch) {
    return{
        onIncreamentClick : ()=> {
            console.log('tombol di klik')
            const action = {type : 'INCREMENT'}
            dispatch(action)

        },
        onDecrement : ()=> {
            console.log('tombol di klik DECREMENT')
            const action = {type : 'DECREMENT'}
            dispatch(action)

        },
        addData : (data)=>{
            const action = {type : 'ADD_DATA', dataApi : data}
            dispatch(action)
        }

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);