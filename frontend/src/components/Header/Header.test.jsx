import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter  } from 'react-router-dom';
describe('Header Component', () => {

    it('shows login and register when there is no user', () => {
        const { debug,getByText} = render(<BrowserRouter ><Header /></BrowserRouter >);
        
        getByText('Login')
        getByText('Registro')
    });
    it('shows the user\'s email and logout',()=>{
        const user ={
            email:'test@email.com',
        }
        const { debug,getByText} = render(<BrowserRouter ><Header user={user}/></BrowserRouter >);
       
        getByText(/test@email.com/)
    });
})