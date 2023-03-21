import { ITodo, IUser } from './types';

const todos: ITodo[] = [
	{
		text: 'Learn about React',
		isCompleted: false,
	},
	{
		text: 'Meet friend for lunch',
		isCompleted: false,
	},
	{
		text: 'Build really cool todo app',
		isCompleted: false,
	},
];

const users: IUser[] = [
	{
		id: 1,
		name: 'Tania',
		username: 'floppydiskette',
	},
	{
		id: 2,
		name: 'Craig',
		username: 'siliconeidolon',
	},
	{
		id: 3,
		name: 'Ben',
		username: 'benisphere',
	},
];

export { todos, users };
