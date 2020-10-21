import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import 'antd/dist/antd.css';
import Register from './containers/Register/Register';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;