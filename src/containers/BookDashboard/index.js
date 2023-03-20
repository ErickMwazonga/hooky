import React from 'react';
import { BookList, BookForm } from '../../components';

const Dashboard = () => {
	return (
		<div className="App">
			<BookList />
			<BookForm />
		</div>
	);
};

export default Dashboard;
