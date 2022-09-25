import React from 'react';

const Bookmarks = ({status, ...rest}) => {

    return (
      <>
          {status?   <i className="bi bi-bookmark-heart-fill"></i>
            :
            <i className="bi bi-bookmark"></i> }

      </>
    );
};

export default Bookmarks;