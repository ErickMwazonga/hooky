import React from 'react';
import BookContextProvider from '../../contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, About, Contact } from '../../components';
import { BookDashboard } from '../../containers';
import './BookStore.css';

const BookStore = () => {
	return (
		<BookContextProvider>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={BookDashboard} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</BrowserRouter>
		</BookContextProvider>
	);
};

export default BookStore;
