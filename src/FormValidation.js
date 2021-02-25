import React, { Component } from 'react'
import './Form.css'

class FormValidation extends Component {
    
constructor(props){
  super()
  this.state={ fullname:"Myname",
               eamil   :"abc@.com",
               phone   :"9958055434",
               message :"type message here"   
        
    }
}
//  we have to use onChange in input field for getting rid of read only mode
//  everything that we reaceive in react is in form of object therefore to change the value of value field we have to use event.target.value

handleName=(event)=>{
    this.setState({fullname:event.target.value})
    console.log(event.target.value);
}
    render() {
        return (
            <div>
              <form>
                <label>Fullaname</label><br/>
                <input type="text" value={this.state.fullname} onChange={this.handleName}/> <br/>
                
                <label>Email</label><br/>
                <input type="email" value={this.state.eamil} onChange={this.handleEmail}/> <br/>

                <label>Mobile</label><br/>
                <input type="number" value={this.state.phone} onChange={this.handlePhone}/> <br/>

                <label>Message </label><br/>
                <textarea value={this.state.message} onChange={this.handleMessage}/> <br/>

                <input type="submit" value="send"/>
              </form>
            </div>
        )
    }
}
 export default FormValidation;