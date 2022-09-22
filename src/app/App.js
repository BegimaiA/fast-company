import React, {useState} from 'react';
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "../api";
import Bookmarks from "./components/bookmarks";



const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const [bookmarkStatus, setBookmarkStatus] = useState(false)
    const handleDelete = (userId)=>{
        return   setUsers(users.filter((item)=>item._id !==userId))
    }


    const handleToggleBookmarks=(id)=>{
        const updatedUsers = users.map((el)=>(
          el._id === id? {...el, bookmark: setBookmarkStatus(!bookmarkStatus)}
            :
            el
        ))
                setUsers(updatedUsers)
    }
    return (
      <>
          <SearchStatus
            length={users.length}
          />
          <Users users={users}
                 onDelete={handleDelete}
                 onToggle={handleToggleBookmarks}
                 bookmarkStatus={bookmarkStatus}

          />

      </>
    );
};

export default App;