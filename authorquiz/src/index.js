import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Sum from './Sum';
import Clicker from './Clicker';
import DangerContainer from './DangerContainer';
import ConditionDisplay from './ConditionDisplay';
import Reloader from './Reloader';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css'
import { shuffle, sample } from 'underscore';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import AddAuthorForm from './AddAuthorForm';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
  }
}

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}
let state = resetState();

function chooseBook(anwser) {
  const isCorrect = state.turnData.author.books.indexOf(anwser) > -1;
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function App() {
  return <AuthorQuiz {...state} 
    chooseBook={chooseBook} 
    onContinue={() => { state = resetState(); render();
    }}/>;
}

const AuthorWrapper = withRouter(({ history }) =>
  <AddAuthorForm onAddAuthor={a => { authors.push(a); history.push('/'); }} />
);

function render() {
  ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/add" component={AuthorWrapper} />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
}
render();

// const props = { a:2, b: 4};
// ReactDOM.render(<Sum {...props} />,  document.getElementById('root'));
// const showChildren = true;

// ReactDOM.render(<Clicker handleClick={(letter) => { console.log(`${letter} clicked.`) }} />, document.getElementById('root'));
// ReactDOM.render(<DangerContainer dangerous='<strong>Hello</strong>' />,  document.getElementById('root'));
// ReactDOM.render(<ConditionDisplay isVisible={ showChildren }>
//     <h1><span>Sum</span></h1><Sum  {...props}/>
// </ConditionDisplay>,  document.getElementById('root'));
// ReactDOM.render(<ClickButtons numbers={ 10 } onSelect={console.log} />,  document.getElementById('root'));

// ReactDOM.render(<Reloader></Reloader>,  document.getElementById('root'));

serviceWorker.unregister();
