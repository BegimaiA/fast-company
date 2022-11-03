import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UsersList = ({ user }) => {
    return <Link to={`/users/${user._id}`}>{user.name}</Link>;
};
UsersList.propTypes = {
    user: PropTypes.object
};
export default UsersList;
