import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import 'antd/dist/antd.css';
import Register from './containers/Register/Register';
import axios from 'axios';
import Profile from './containers/Profile/Profile';
import PrivateZone from './guards/PrivateZone';
import Error404 from './containers/Error404/Error404.jsx';
import UserList from './containers/UserList/UserList';
import CheckPrivileges from './guards/CheckPrivileges';
import { useDispatch } from 'react-redux';
import { GET_PROFILE } from './redux/types';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      axios.get(process.env.REACT_APP_BASE_URL + '/users/profile',
        {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          dispatch({ type: GET_PROFILE, payload: res.data })
        })
    }
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' exact ><Login /></Route>
        <Route path='/register' component={Register} exact />
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