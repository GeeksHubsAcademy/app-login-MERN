import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import 'antd/dist/antd.css';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import PrivateZone from './guards/PrivateZone';
import Error404 from './containers/Error404/Error404.jsx';
import UserList from './containers/UserList/UserList';
import CheckPrivileges from './guards/CheckPrivileges';
import MovieList from './containers/MovieList/MovieList';
import { getUser } from './redux/actions/users';
function App() {
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      getUser(token)
    }
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' exact ><Login /></Route>
        <Route path='/register' component={Register} exact />
        <Route path='/movies' component={MovieList} exact/>
        <PrivateZone>
          <CheckPrivileges roles={['admin', 'Dios']}>
            <Route path='/profile' exact><Profile /></Route>
            <Route path='/users' component={UserList} exact />
          </CheckPrivileges>
        </PrivateZone>

        <Route path='/*' component={Error404} exact />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;