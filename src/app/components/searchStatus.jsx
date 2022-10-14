import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const getBadgeClasses = () => {
        let classes = "badge p-2 fs-3 ";
        classes += length === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        console.log(lastOne);
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };

    return (
        <>
            <h1 className={getBadgeClasses()}>
                <span>
                    {length > 0
                        ? `${
                            length + " " + renderPhrase(length)
                        } с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h1>
        </>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
export default SearchStatus;
