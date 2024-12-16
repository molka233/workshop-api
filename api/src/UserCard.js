import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <li>
        <h3>name:{user.name}</h3>
        <p>username:{user.username}</p>
        <p>email:{user.email}</p>
      </li>
    </div>
  )
}

export default UserCard
