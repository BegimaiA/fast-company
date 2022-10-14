import React from "react";
import PropTypes from "prop-types";

const Bookmarks = ({ status, ...rest }) => {
    return (
        <>
            {status ? (
                <i className="bi bi-bookmark-heart-fill"></i>
            ) : (
                <i className="bi bi-bookmark"></i>
            )}
        </>
    );
};
Bookmarks.propTypes = {
    status: PropTypes.any.isRequired
};

export default Bookmarks;
