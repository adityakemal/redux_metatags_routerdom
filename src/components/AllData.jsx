import React, { Component } from 'react';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';


class AllData extends Component {
    render() {
        console.log(this.props.dataAll, 'semua ada disini');
        
        return (
            <div>
                <MetaTags>
                    <title>ALL DATA</title>
                    <meta name="description" content="ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA ALL DATA " />
                </MetaTags>
                <h1>ini semua data</h1>
                <p>count : {this.props.dataAll.count}</p>
                <p style={{backgroundColor : `#${this.props.dataAll.dataApi.new_color}`}}>color : {this.props.dataAll.dataApi.new_color}</p>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        dataAll : state
    }
}

export default connect(mapStateToProps)(AllData);