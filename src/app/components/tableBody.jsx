import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
    const params = useParams();
    console.log(params._id);

    const renderContent = (item, column) => {
        console.log("item", item);
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>
                            <Link to={`/users/${item._id}`}>
                                {renderContent(item, column)}
                            </Link>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableBody;
