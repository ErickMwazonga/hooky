import React, { useState } from 'react';
import { ITodo } from '../../types';
import './Todo.css';

interface IProps {
	todo: ITodo;
	index: number;
	completeTodo: (index: number) => void;
	removeTodo: (index: number) => void;
}

const Todo: React.FC<IProps> = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
		>
			<span>{todo.text}</span>

			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
};

export default Todo;
