import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Book({ title, chooseBook }) {
  return (
    <div className="answer" onClick={e => chooseBook(title)}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({ author, books, highlight, chooseBook }) {

  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((t) => <Book title={t} key={t} chooseBook={chooseBook} />)}
      </div>
    </div>);
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};


function Continue() {
  return (
    <div className="row"></div>
  );
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
        </p>
      </div>
    </div>);
}

function AuthorQuiz({ turnData, highlight, chooseBook }) {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData} highlight={highlight} chooseBook={chooseBook}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  );
}

export default AuthorQuiz;

