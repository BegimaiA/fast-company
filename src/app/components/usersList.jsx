import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import API from "../../api";
import ListGroup from "./listGroup";
import UserTable from "./userTable";
import PropTypes from "prop-types";
import _ from "lodash";
import SearchStatus from "./searchStatus";
import SearchUser from "./searchUser";

const UsersList = () => {
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        return setUsers(users?.filter((item) => item._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchInput]);

    const filteredUsers = searchInput ?
      users?.filter((user) =>
        user.name.toLowerCase().indexOf(searchInput.toLowerCase())!== -1
      )
      : selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

    const handleProfessionSelect = (item) => {
        if(searchInput!== "") setSearchInput("");
        setSelectedProf(item);
    };

    const handleSearchInput = (e) => {
        setSelectedProf(undefined);
        setSearchInput(e.target.value.trim());
    };

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <ListGroup
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                        selectedItem={selectedProf}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        {" "}
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <SearchUser
                    onSearchInput={handleSearchInput}
                    searchInput={searchInput}
                />
                {count > 0 && (
                    <UserTable
                        users={userCrop}
                        selectedSort={sortBy}
                        onSort={handleSort}
                        onDelete={handleDelete}
                        onToggleBookMark={handleToggleBookMark}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};
export default UsersList;
