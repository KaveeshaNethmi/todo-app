import React from 'react'
import { Link } from 'react-router-dom'
import AddUser from './user/AddUser'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-blue-600 flex  items-center px-10 py-2 justify-between'>

      <h1 className='text-white text-3xl  font-semibold font-montserrat '>CRUD</h1>
      <Link to={`/add-user`} className='w-48 bg-white text-blue-300 font-semibold text-xl rounded'>Add User</Link>
    </div>
  ) 
}

export default Navbar
