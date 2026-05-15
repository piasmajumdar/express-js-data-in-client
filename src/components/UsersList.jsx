import React, { use } from 'react';

const UsersList = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users)
    return (
        <div>
            <h2>Users inside users list: {users.length}</h2>
        </div>
    );
};

export default UsersList;