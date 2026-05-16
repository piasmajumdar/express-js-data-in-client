// const usersPromise = fetch('http://localhost:8000/users').then(res = res.json());

import UsersList from "@/components/UsersList";
import Link from "next/link";
import { Suspense } from "react";

const getUsers = async()=>{
    const res = await fetch('http://localhost:9000/users');
    return res.json();
}

const Users2Page = async() => {
    // const usersPromise = await getUsers();
    const usersPromise = getUsers();

    return (
        <div>
            <h2>Users2: with suspense</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UsersList usersPromise={usersPromise}></UsersList>
            </Suspense>
            <Link href={'/users2/new2'} className="btn bg-green-600 p-2 border rounded-md">Add new user</Link>
        </div>
    );
};

export default Users2Page;