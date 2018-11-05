import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Sum from './Sum';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css'

ReactDOM.render(<AuthorQuiz a={'c'} b={2} />, document.getElementById('root'));
ReactDOM.render(<Sum a ={'a'} b={2} />,  document.getElementById('root'));
serviceWorker.unregister();
