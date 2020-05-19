import React from 'react';
import BookList from './BookList'
import BookForm from './BookForm'
import './BookStore.css';

const Dashboard = () => {
  return (
    <div className='App'>
      <BookList />
      <BookForm />
    </div>
  );
};

export default Dashboard;