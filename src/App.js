
import './App.css';
import Home from './Pages/HomePages/Home/Home';
import {
  BrowserRouter,
  Switch,
  // Link,
  Route
} from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            {/* <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute> */}
            <Route path="/home" >

              <Home />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/register" >
              {/* <Register /> */}
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
