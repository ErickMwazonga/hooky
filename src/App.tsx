import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { ITodo } from './types';
import { todos as data } from './data';

const App = () => {
	const [todos, setTodos] = useState<ITodo[]>(data);

	const addTodo = (todoText: string) => {
		const newTodos: ITodo[] = [...todos, { text: todoText }];
		setTodos(newTodos);
	};

	const completeTodo = (index: number) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = (index: number) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}

				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
