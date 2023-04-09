 import React from 'react'
 import {useParams} from 'react-router-dom'
 import axios  from 'axios';
 import { useEffect,  useState } from 'react';
 import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const User = () => {

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

    const[user, setUser] = useState([]);

    useEffect(()=> {
        Users();
    
        // const loadUsers =  async () => {
        // };
        // loadUsers(); 
    }, ['']);
    
    const {id} =  useParams()

    const Users = async () => {
        const data = await get(`
            query User {
              students(id: id){
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
        setUser(data);
        console.log('check-----------------');
        console.log(data.data.attributes);
      };
    //   const Users = async () => {
    //   const response = await axios.get(`http://localhost:1337/api/students/${id}`);
    
    //   console.log('response-----------------');
    //   console.log(response.data);
    
    // // After fetching data stored it in posts state.
    // setUser(response.data.data);
    
    // }
    
    
    return (
        
        <div className='w-full h-full flex flex-col justify-center '>
           
           
                 <div key={id} className='w-[500px] h-[500px] border-black mt-16 ' >
                    <div  className='w-5/12 flex flex-col space-y-4'>
                    console.log(user)
                        <h1>{User.data.data.attributes.Name}</h1>
                        <h1>{user.attributes}</h1>
                        <h1>{user.attributes}</h1>
                    </div>
                </div> 
    
        </div>
        
    )
 }
 
 export default User
 