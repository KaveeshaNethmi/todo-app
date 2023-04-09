import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import User from './User';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  useEffect(()=> {
    getUsers();   
  }, []);

  const getUsers = async () => {
  const response = await axios.get(`http://localhost:1337/api/students/${id}`);

  console.log('response-----------------');
  console.log(response.data.data.attributes.Name);

  setName(response.data.data.attributes.Name);
  setEmail(response.data.data.attributes.Email);
  setMobile(response.data.data.attributes.Mobile);
  }

  const {id} =  useParams();

//   const data ={
//     "data": {
//         "Name": name,
//         "Email": email,
//         "Moble": mobile,
//     }
// }
const ADD_USER = gql`
  mutation UpdateUser {
    addUser(input: { 
      where: {id : ${id}}
      data: {Name:Name, Email: $Email, Mobile: $Mobile }) {
      {

        student {
          Name
          Email
          Mobile
        }
      }
    }
  }
`;

function update (e) {
  e.preventDefault();
  updateUser({ variables: { Name: input.value, Email: input.value, Mobile: input.value} });
  input.value = '';
  navigate('/');
  
};
  // async function Update(e) {

  //   e.preventDefault()
  //     await axios.put(`http://localhost:1337/api/students/${id}`, data)
  //   .then(navigate("/"))
  // }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Edit User
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                name="email"
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
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
              onClick={Update}
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
              Update User
            </button>
          </div>
          <div></div>
        </form>
        <Link to="/">Back To Home</Link>
      </div>

    </div>
  )
}

export default Edit
