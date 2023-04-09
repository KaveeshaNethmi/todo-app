import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const Home = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const get = async (query) => {
    try {
      const { data } = await client.query({
        query: gql`
          ${query}
        `,
      });
      return data;
    } catch (error) {
      console.log('Network error');
    }
  };

  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, ['']);

  const getUsers = async () => {
    const data = await get(`
        query Users {
          students {
            data{
              id
              attributes{
                Name
                Email
                Mobile
              }
            }
          }
        }`);
    setUsers(data.students.data);
    console.log('check-----------------');
    console.log(data.students.data);
  };

  function Delete() {
    // axios.delete(`http://localhost:1337/api/students/${id}`)
    // .then(
    //   getUsers()
    // )
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <h1 className="text-black text-3xl  font-semibold font-montserrat">
        Home Page
      </h1>

      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              ID
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Mobile
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>

        {users.map((val) => (
          <>
            <p> {val.id}</p>
            <p> {val.attributes.Name}</p>
          </>
        ))}

        {users.map((val) => (
          <tbody key={val.id} className="block md:table-row-group">
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  1
                </span>
                {val.id}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  User Name
                </span>
                {val.attributes.Name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Email
                </span>
                {val.attributes.Email}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Mobile
                </span>
                {val.attributes.Mobile}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <Link
                  to={`/users/${val.id}`}
                  className="bg-green-500 hover:bg-blue-700 mr-5 text-white font-bold py-1 px-2 border border-green-500 rounded"
                >
                  View
                </Link>
                <Link
                  to={`/edit-user/${val.id}`}
                  className="bg-blue-500 hover:bg-blue-700 mr-5 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => Delete(val.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
