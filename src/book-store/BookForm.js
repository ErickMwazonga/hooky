import React, { useContext, useState } from 'react';
import { BookContext } from './contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const initialBookState = {
    title: '',
    author: ''
  }

  const [book, setBook] = useState(initialBookState);

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book);
    setBook(initialBookState);
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Book</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={book.title}
              onChange={handleChange}
              placeholder='e.g. Chakacha'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='author'
              name='author'
              value={book.author}
              onChange={handleChange}
              placeholder='e.g. Nairobi'
              className='validate'
              required
            />
            <label className='active' htmlFor='author'>
              Author
            </label>
          </div>
          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'
            >
              <i className='material-icons right'>add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;