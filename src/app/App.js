import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "../api";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        return setUsers(users?.filter((item) => item._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users?.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
};

export default App;
