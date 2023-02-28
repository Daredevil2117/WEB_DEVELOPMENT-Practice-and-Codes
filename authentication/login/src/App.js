import { useState } from 'react';
import Login from './components/Login'
import Main from './components/Main'
import Signup from './components/Signup'
import { BrowserRouter, Switch, Route } from 'react-router-dom';  //Routes == Switch


function App() {
  const [user , setLoginUser] = useState({})


  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
          {
            user && user._id ? <Main setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          }
          </Route>
          <Route path='/login'>
              <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
         
        </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;