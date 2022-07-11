import React, { useEffect, useState } from 'react'
import { Post } from '../../components'

const Posts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      // const response = await fetch(`http://localhost:5000/post/`);
      const response = await fetch(`http://192.168.1.6:5000/post/`);

      if(!response.ok){
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

  function postsList() {
    return users.map((user) => {
      let datePosted = new Date(user.posted);
      let dateNow = new Date()

      let differinceInTime = dateNow.getTime() - datePosted.getTime();
      let differinceInDays = differinceInTime / (1000 * 3600 * 24);

      return (
        <Post
          profilePicture={require(`../../assets/${user.userPicture}`)} name={user.name} picture={require(`../../assets/${user.picture}`)} likes={user.likes} description={user.description} comments={user.comments} daysPosted={Math.floor(differinceInDays)} key={user._id}
        />
      )
    })
  }

  return (
    <div className='posts-container'>
      {postsList()}
    </div>
  )
}

export default Posts