import { render, screen } from '@testing-library/react';
import JSApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';



it('renders without crushing', () => {
const div= document.createElement ('div')
ReactDOM.render (<JSApp />, div)
ReactDOM.unmountComponentAtNode (div)
})