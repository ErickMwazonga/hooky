import React from 'react';
import { useState } from 'react';

interface IProps {
	addTodo: (value: string) => void;
}

const TodoForm: React.FC<IProps> = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default TodoForm;
