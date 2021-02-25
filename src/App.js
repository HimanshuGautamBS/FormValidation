import React from "react";
import {Route, Switch} from "react-router-dom";
import FormValidation from './components/FormValidation'
import Form from './components/Form'

const App=()=>{

  return (
      <>
      <Switch>
        <Route exact path="/" component={FormValidation}/>
        <Route path="/contact" component={Form}/>
        {/* <Route component={Error} /> */}
      </Switch>
      </>
    );
};

export default App;


// import React, { Component } from 'react'
// import FormValidation from './components/FormValidation'
// import Form from './components/Form'
// import { Route, Switch } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route path="form1" component={FormValidation}/>
//           <Route path="form2" component={Form}/>
//         </Switch>
//       </div>
//     )
//   }
// }
