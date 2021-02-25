import React, { Component } from 'react'
import './Form.css'

class FormValidation extends Component {
    
constructor(props){
  super()
  this.state={ fullname:"Myname",
               email   :"abc@.com",
               phone   :"9958055434",
               message :"type message here",
               password:""
        
    }
}
//  we have to use onChange in input field for getting rid of read only mode
//  everything that we reaceive in react is in form of object therefore to change the value of value field we have to use event.target.value

// handleName=(event)=>{
//     this.setState({fullname:event.target.value})
//     console.log(event.target.value);
// }

// handleEmail=(event)=>{
//     this.setState({eamil:event.target.value})
// }

// handlePhone=(event)=>{
//     this.setState({phone:event.target.value})
// }

// handleMessage=(event)=>{
//     this.setState({message:event.target.value})
// }


// keep in mind that - event.target.name not .value
handleAll=(event)=>{
  this.setState({[event.target.name]:event.target.value})
}

handlesubmit=(event)=>{
    // alert(`my name is ${this.state.fullname}`)
    alert(JSON.stringify(this.state));
    event.preventDefault();
    // event.preventDefault() stop the page to redirect on new page after sending data
}
    render() {
        return (
            <div style={{padding:"50px"}}>
                {/* handlesubmit for sending data to server */}
              <form onSubmit ={this.handlesubmit}>
                <label>Fullaname</label><br/> 
                <input type="text" name="fullname" value={this.state.fullname}  onChange={this.handleAll}/> <br/>                                
                {/* <input type="text" value={this.state.fullname} name="fullname" onChange={this.handleName}/> <br/> */}
                
                <label>Email</label><br/>
                <input type="email"  name="email" value={this.state.email} onChange={this.handleAll}/> <br/>

                <label>Mobile</label><br/>
                <input type="number" name="phone" value={this.state.phone}  onChange={this.handleAll}/> <br/>

                <label>Message </label><br/>
                <textarea value={this.state.message} name="message"  onChange={this.handleAll}/> <br/>

                <label> Password</label><br/>
                <input type="password" name="password" value={this.state.password}  onChange={this.handleAll}/> <br/>

                <input type="submit" value="send"/> 
                {/* if type ="submit" it'll redirect to new page(property of js) */}
              </form>
            </div>
        )
    }
}
 export default FormValidation;