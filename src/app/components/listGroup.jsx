import React from "react";
import PropTypes from "prop-types";
const ListGroup = ({ items, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item._id}
                    className={
                        "list-group-item" +
                        (item === selectedItem ? " active" : "")
                    }
                    role="button"
                    onClick={() => onItemSelect(item)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};
ListGroup.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
ListGroup.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};
export default ListGroup;
