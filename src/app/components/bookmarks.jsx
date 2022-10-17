import React from "react";
import PropTypes from "prop-types";

const Bookmarks = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};
Bookmarks.propTypes = {
    status: PropTypes.any.isRequired
};

export default Bookmarks;
