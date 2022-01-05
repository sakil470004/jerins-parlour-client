
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
import ServicesList from './Pages/ServicesList/ServicesList';
import Footer from './Pages/Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard/DashBoard';
import PrivateRoute from './Pages/Login/Firebase/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>

            <Route path='/services'>
              <ServicesList />
              <Footer />

            </Route>
            {/* <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/home" >
              <Home />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
