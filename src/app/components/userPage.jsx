import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        API.users.fetchById(userId).then((data) => setUser(data));
    }, []);
    const handleMoveToUsers = (userId) => {
        userId ? history.push("/users") : history.replace("/users");
    };

    return (
        <>
            {user ? (
                <>
                    <h1>{user.name}</h1>
                    <h4>
                        <QualitiesList qualities={user.qualities} />
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
                <h3>"Loading"</h3>
            )}
        </>
    );
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
