import React from 'react';
import Quality from "./quality";

const User = ({user, ...rest}) => {

    return (
      <>
          <tr key={user._id}>
              <th scope="row">{user.name}</th>
              <td>
                  {user?.qualities.map(quality=> <Quality
                    color={quality.color}
                    name={quality.name}
                    id={quality._id}
                    />
                  )}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                  <button onClick={()=>rest.toggle(user._id)}>
                      {rest.bookmarkStatus?   <i className="bi bi-bookmark-heart-fill"></i>
                        :
                        <i className="bi bi-bookmark"></i> }
                  </button>
              </td>
              <td>
                  <button type='button' className='btn-sm btn-danger p-2 rounded '
                          onClick={()=>rest.onDelete(user._id)}
                  >Delete</button>
              </td>
          </tr>
      </>
    );
};

export default User;