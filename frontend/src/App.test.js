import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Item from 'antd/lib/list/Item';


test('renders learn react link', () => {
    const { getAllByText } = render(<Provider store={store}><App /></Provider>);
    getAllByText("Home");
});