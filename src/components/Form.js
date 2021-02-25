import React, { Component } from 'react'

export default class Form extends Component {

  constructor()
  {
    super();
    this.state=
    {
      email:"",
      password:"",
      nameError:"",
      passwordError:""
    }
  }

  valid()
  {
    if(!this.state.email.includes("@") && this.state.password.length < 5)
    {
      this.setState({nameError:"Invalid Email",passwordError: "Password lenth should be more than 5"})
    }
    else if(!this.state.email.includes("@"))
    {
     this.setState({nameError:"Invalid Email"})
    }
    else if(this.state.password.length < 5)
    {
      this.setState({passwordError:"Password length should be grater than 5"}) 
    }
    else
    {
      return true;
    }
  }


  submit()
    {
      if(this.valid())
      {
        alert("form has been submitted")
      }
    }

  render() 
  {
    return (
      <div style={{padding:"50px"}}>
               
      <label>Email</label><br/>
      <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}}/>
      <p style={{color:"red" ,fontSize:"14px"}}>{this.state.nameError}</p>

      <label>Password</label><br/>
      <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
      <p style={{color:"red" ,fontSize:"14px"}}>{this.state.passwordError}</p>
      <button onClick={()=>this.submit()}>Submit</button>
                
      </div>
        )
    }
}
