import React from 'react';

const Bookmarks = ({status, ...rest}) => {

    return (
      <>
          <button onClick={rest.toggle}>
            <i className="bi bi-bookmark-heart-fill"></i>
          </button>

      </>
    );
};

export default Bookmarks;