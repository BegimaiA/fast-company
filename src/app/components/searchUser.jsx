import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ onSearchInput, searchInput }) => {
    return (
        <div className="d-flex">
            <input
                className="form-control me-2"
                placeholder="Search..."
                type="text"
                onChange={(e) => onSearchInput(e)}
                value={searchInput}
            />
        </div>
    );
};
SearchUser.propTypes = {
    onSearchInput: PropTypes.func,
    searchInput: PropTypes.string
};

export default SearchUser;
