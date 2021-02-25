import React, { Component } from 'react'

export default class Form extends Component {

    constructor()
    {
        super();
        this.state={
            email:"",
            password:""
        }
    }

    render() {
        return (
            <div style={{padding:"50px"}}>
                <h3>Form</h3>
                <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                <p></p>
                <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
                <p></p>
                <button onClick={()=>this.submit}>Submit</button>
                
            </div>
        )
    }
}
