import logo from './logo.svg';
import React,{cloneElement, useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(uName,uAge,uCollege)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:uName ,age:uAge, college:uCollege ,id:Math.random().toString()}]
    })

  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
