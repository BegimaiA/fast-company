import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ onSearchInput, handleClick, handleKeyPress,searchInput }) => {
    return (
        <div className="d-flex">
            <input
                className="form-control me-2"
                placeholder="Search..."
                type="text"
                onChange={(e) => onSearchInput(e)}
                onKeyPress={(e)=>handleKeyPress(e)}
                value={searchInput}
            />
            <button className="btn btn-outline-success" onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
};
SearchUser.propTypes = {
  onSearchInput: PropTypes.func,
  handleClick:PropTypes.func,
  handleKeyPress:PropTypes.func,
  searchInput:PropTypes.string
}

export default SearchUser;
