import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import 'antd/dist/antd.css';
import Register from './containers/Register/Register';
import axios from 'axios';
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    axios.get(process.env.REACT_APP_BASE_URL + '/users/profile',
      {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setUser(res.data)
      })
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' exact ><Login setUser={setUser} /></Route>
        <Route path='/register' component={Register} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;