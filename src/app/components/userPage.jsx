import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import API from "../../api";

const UserPage = () => {
    const params = useParams();
    const history = useHistory();
    const [user, setUser] = useState({});
    console.log("params", params);
    console.log("user", user);
    useEffect(() => {
        API.users.fetchById(params.userId).then((data) => setUser(data));
    }, [user]);
    const handleMoveToUsers = (userId) => {
        userId ? history.push("/users") : history.replace("/users");
    };
    return (
        <div>
            {user._id ? (
                <>
                    <h1>{user.name}</h1>
                    <h4>
                        {user.qualities?.map((item) => (
                            <span
                                className={"badge m-2 bg-" + item.color}
                                key={user._id}
                            >
                                {" "}
                                {item.name}
                            </span>
                        ))}
                    </h4>
                    <h4>Профессия:{user.profession?.name} </h4>
                    <h5>Встретился, раз: {user.completedMeetings}</h5>
                    <h5>Оценка: {user.rate}</h5>
                    <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleMoveToUsers(user._id)}
                    >
                        Все пользователи
                    </button>
                </>
            ) : (
                "Loading"
            )}
        </div>
    );
};

export default UserPage;
