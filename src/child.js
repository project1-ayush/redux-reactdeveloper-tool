import React from 'react';
import {connect} from 'react-redux';
class Child extends React.Component
{
    handleBtn=()=>{
        this.props.dispatch({
            type:'Citychange',
            payload:'Mumbai'
        })
    }
    render()
    {
        return(<div> <h2>{this.props.city}</h2>
        <button onClick={this.handleBtn}>Click</button>
        </div>)  
    }
}

function mapStateToProps(state)
{
    console.log(state);
    const {city}=state;

    return {city:city}
}
export default connect(mapStateToProps)(Child);