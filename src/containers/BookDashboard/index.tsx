import React from 'react';
import { BookList, BookForm } from '../../components';

const Dashboard: React.FC = (): JSX.Element => {
	return (
		<div className="App">
			<BookList />
			<BookForm />
		</div>
	);
};

export default Dashboard;
