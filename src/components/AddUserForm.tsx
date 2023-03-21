import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react';
import { IUser } from '../types';

interface IProps {
	addUser: (user: IUser) => void;
}

const AddUserForm: React.FC<IProps> = ({ addUser }): JSX.Element => {
	const [user, setUser] = useState<IUser>({} as IUser);

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
		event: any
	) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!user.name || !user.username) return;

		addUser(user);
		setUser({} as IUser);
	};

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<label>Name</label>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handleInputChange}
			/>

			<label>Username</label>
			<input
				type="text"
				name="username"
				value={user.username}
				onChange={handleInputChange}
			/>

			<button>Add new user</button>
		</form>
	);
};

export default AddUserForm;
