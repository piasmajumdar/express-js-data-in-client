const UsersPage = async () => {
    const res = await fetch('http://localhost:8000/users');
    const users = await res.json();
    console.log(users);
    return (
        <div>
            <h2>Users: {users.length}</h2>

            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user => <div key={user.id} className="border-2 p-3 rounded-md">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default UsersPage;