import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Header from '/components/header/Header.css';
import Header from '../components/header/Header.jsx';

import Example from './components/example/Example';

ReactDOM.render(
  <Example />,
  document.getElementById('reactapp'),
);
