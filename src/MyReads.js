import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';


class MyReads extends Component {

  render(){

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
            	title='Currently Reading'
            	books={this.props.books}
            	shelf='currentlyReading'
            />
            <BookShelf
            	books={this.props.books}
            	title='Want to Read'
            	shelf='wantToRead'
            />
            <BookShelf
            	books={this.props.books}
            	title='Read'
            	shelf='read'
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>

    );
  }
}

export default MyReads;