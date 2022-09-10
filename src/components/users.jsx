import React, {useState} from 'react';
import api from "../api";



const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll)

    const handleDelete = (userId)=>{
      return   setUsers(users.filter((item)=>item._id !==userId))
    }
    const getBadgeClasses = ()=>{
        let classes = 'badge p-2 fs-3 '
        classes += users.length === 0? 'bg-warning' : 'bg-primary'
        return classes
    }

    const renderPhrase = (number) =>{
        switch (number){
            case 0:
              return   'Никто не тусанет с тобой сегодня';
            case 1:
             return    'Человек тусанeт с тобой сегодня';
        case 2:
           return  'Человека тусанут с тобой сегодня';
            case 3:
               return  'Человека тусанут с тобой сегодня';
            case 4:
             return    'Человека тусанут с тобой сегодня';
            default:
              return   'Человек тусанeт с тобой сегодня';
    }}
    return (
     <>
         <h1 className={getBadgeClasses()}>
             {users.length}
             <span className='m-2'>{renderPhrase(users.length)}</span>
         </h1>

         {
             users.length !==0 && (
           <table className="table">
               <thead>
               <tr>
                   <th scope="col">Имя</th>
                   <th scope="col">Качества</th>
                   <th scope="col">Профессия</th>
                   <th scope="col">Встретился, раз</th>
                   <th scope="col">Оценка</th>
                   <th scope="col"></th>
               </tr>
               </thead>
               {
                   users.map((user)=>(
                     <tbody>
                     <tr key={user._id}>
                         <th scope="row">{user.name}</th>
                         <td>
                             {user.qualities.map(quality=> <span className={'badge m-2 bg-' + quality.color }>
                                 {quality.name}</span>
                             )}
                         </td>
                         <td>{user.profession.name}</td>
                         <td>{user.completedMeetings}</td>
                         <td>{user.rate}/5</td>
                         <td><button type='button' className='btn-sm btn-danger p-2 rounded '
                                     onClick={()=>handleDelete(user._id)}>Delete</button></td>
                     </tr>
                     </tbody>
                   ))
               }
           </table>
           )
         }
     </>
    );
};

export default Users;