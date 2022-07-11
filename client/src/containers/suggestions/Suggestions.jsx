import './suggestions.css'
import React, { useEffect, useState } from 'react'
import { Suggestion } from '../../components'
import me from '../../assets/me.jpg'
import { woman1, woman2, woman3, man1, man2, man3, unknown } from '../suggestions/import'

const Suggestions = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`http://localhost:5000/users/`);
      
      if(!response.ok){
        const message = `An erro occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      setUsers(users);
    }
    getUsers()
    return;
  }, [users.length])

  function suggestionList() {
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
        <Suggestion 
          picture={userPicture} name={user.name} key={user._id}
        />
      )
    })
  }

  return (
    <div className='suggestions_header'>
      <div className='suggestions_header__container'>
        <div className='suggestions_header__profile'>
          <img src={me} alt='me' />
          <div>
            <p>ynsevdb</p>
            <p>Ynse Vandenbilcke</p>
          </div>
          <p>Switch</p>
        </div>
      </div>
      <div className='suggestionsAll__container'>
        <p>Suggestions for you</p>
        <p>See All</p>
      </div>
      {/* <Suggestion name="Alice Mcleod" picture={woman1} />
      <Suggestion name="Susan Burnett" picture={woman3} />
      <Suggestion name="Muhammad Rosas" picture={man2} />
      <Suggestion name="Lennox Mcintyre" picture={man1} />
      <Suggestion name="Suman Gardner" picture={woman2} /> */}
      {suggestionList()}
    </div>
  )
}

export default Suggestions