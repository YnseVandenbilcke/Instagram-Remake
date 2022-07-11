import './stories.css'
import React, { useEffect, useState } from 'react'
import { Story } from '../../components'
import { woman1, woman2, woman3, man1, man2, man3, unknown } from '../../components/story/import'  // Mockup pictures

const Stories = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      // const response = await fetch(`http://localhost:5000/users/`)
      const response = await fetch(`http://192.168.1.6:5000/users/`);

      if(!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      setUsers(users);
    }

    getUsers()
    return;
  }, [users.length])

  function storyList() {
    return users.map((user) => {
      let userPicture;
      switch(user.picture){
        case "woman1":
          userPicture = woman1;
          break;
        case "woman2":
          userPicture = woman2;
          break;
        case "woman3":
          userPicture = woman3;
          break;
        case "man1":
          userPicture = man1;
          break;
        case "man2":
          userPicture = man2;
          break;
        case "man3":
          userPicture = man3;
          break;
        default:
          userPicture = unknown;
          break;
      }
      return (
        <Story
          name={user.name} picture={userPicture} key={user._id}
        />
      )
    })
  }
  
  return (
      <div className='stories'>
        {storyList()}
      </div>
  )
}

export default Stories