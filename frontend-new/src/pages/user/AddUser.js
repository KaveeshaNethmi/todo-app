import { gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

// Define mutation

const ADD_USER = gql`
  mutation AddUser {
    createStudent(input: { data: {Name:$Name, Email: $Email, Mobile: $Mobile }) {
      data {
        id
        attributes {
          Name
          Email
          Mobile
        }
      }
    }
  }
`;

function AddUser() {
  let input;

  // const data = {
  //   "data": {
  //     "Name": name,
  //     "Email": email,
  //     "Mobile":mobile
  //     }
  // }

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const AddUser = () => {      

  
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");

  
  const navigate = useNavigate()

 
//   function submit (e) {
//     e.preventDefault()
//     axios.post("http://localhost:1337/api/students", data)
//     .then(
//       navigate('/')
//     )
//   }

function submit (e) {
  e.preventDefault();
  addUser({ variables: { Name: input.value, Email: input.value, Mobile: input.value} });
  input.value = '';
  navigate('/');
  
};

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Add User
        </h1>
        <form  className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Name</span>
              <input
                value={Name}
                onChange={(e) => setName(e.target
                  .value)} 
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
              value={Email}
              onChange={(e) => setEmail(e.target
                .value)}
                name="name"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Mobile</span>
              <input
              value={Mobile}
              onChange={(e) => setMobile(e.target
                .value)}
                name="email"
                type="text"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="+9404552626"
                required
              />
            </label>
          </div>

          <div class="mb-6">
            <button
            onClick={submit}
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Add User
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  )
}
}
export default AddUser
