import React from "react";
import PropTypes from "prop-types";

const SortingIcon = ({ selectedSort, columns, column }) => {
    const renderIcon = () => {
        if (selectedSort.path !== columns[column].path) return null;
        if (selectedSort.order === "asc") {
            return <i className="bi bi-caret-down-fill"></i>;
        }
        return <i className="bi bi-caret-up-fill"></i>;
    };
    return <>{renderIcon()}</>;
};
SortingIcon.propTypes = {
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    column: PropTypes.string
};

export default SortingIcon;
