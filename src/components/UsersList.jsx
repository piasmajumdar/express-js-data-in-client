import React, { use } from 'react';

const UsersList = ({ usersPromise }) => {
    const users = use(usersPromise);
    console.log(users)
    return (
        <div>
            <h2>Users inside users list: {users.length}</h2>
            {
                users.map(user => <div key={user.id} className="border-2 p-3 rounded-md">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>)
            }
        </div>
    );
};

export default UsersList;