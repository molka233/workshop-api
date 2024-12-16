import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
const UserList = () => {
    const[Users,setUsers]= useState([]);
    console.log(Users);
    useEffect( ()=> {
        const afficheUsers=async()=> {
          try {
            const response= await axios.get("http://jsonplaceholder.typicode.com/users");
            setUsers(response.data)
          } catch (error) {
            console.error("error fetching users",error);
          }

        };
        afficheUsers();
    },[])
  return (
    <div>
  {
    Users.map((user)=> (
       <UserCard key={user.id} user={user}/>
    ))
  }    
    </div>
  )
}

export default UserList
