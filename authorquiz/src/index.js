import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Sum from './Sum';
import Clicker from './Clicker';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css'

ReactDOM.render(<AuthorQuiz a={'c'} b={2} />, document.getElementById('root'));

const props = { a:2, b: 4};
ReactDOM.render(<Sum {...props} />,  document.getElementById('root'));

ReactDOM.render(<Clicker  handleClick= {(letter) => { console.log(`${letter} clicked.`) }} />,  document.getElementById('root'));

// ReactDOM.render(<ClickButtons numbers={ 10 } onSelect={console.log} />,  document.getElementById('root'));
serviceWorker.unregister();
