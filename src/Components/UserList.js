import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import NavBars from './NavBars';
import UserCard from './UserCard';

const UserList = () => {
    const dispatch = useDispatch();
    const {loading,users} = useSelector((state) => state);
   useEffect(() => {
     dispatch(getData());
     
   }, [])
   const [text, setText] = useState("")
    return (
    <div>
    <NavBars text={text} setText={setText}/>
        <div className="container">
            <div className="row ml-5">
                
             {
      loading? 
     
      <Spinner animation="border" variant="primary"  />
 : 
    
        users.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())).map((el,i)=> <UserCard el={el} key={i}/>)
     
    }
        </div>
        </div>
        </div>
    )
}

export default UserList
