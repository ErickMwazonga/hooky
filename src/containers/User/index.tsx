import React, { useState } from 'react';
import { users as data } from '../../data';
import { UserTable, AddUserForm, EditUserForm } from '../../components';
import './User.css';
import { IUser } from '../../types';

const App: React.FC = (): JSX.Element => {
	const [users, setUsers] = useState<IUser[]>(data);
	const [editing, setEditing] = useState<boolean>(false);
	const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);

	const addUser = (user: IUser) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const deleteUser = (id: number) => {
		setEditing(false);
		setUsers(users.filter((user) => user.id !== id));
	};

	const editRow = (user: IUser) => {
		const { id, name, username } = user;

		setEditing(true);
		setCurrentUser({ id, name, username });
	};

	const updateUser = (id: number, updatedUser: IUser) => {
		setEditing(false);
		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>

			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>

					<UserTable
						users={users}
						editRow={editRow}
						deleteUser={deleteUser}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
