import React, { useState } from 'react'
import {RiCompassDiscoverLine, RiMenu3Line, RiCloseLine  } from 'react-icons/ri'
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai'
import {BiMessageSquareDots} from 'react-icons/bi'
import {GrAddCircle} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'
import TextField from "@mui/material/TextField";
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'><AiOutlineHome size={27}/></a></p>
    <p><a href='#messages'><BiMessageSquareDots size={27}/></a></p>
    <p><a href='#add'><GrAddCircle size={27} /></a></p>
    <p><a href='#discover'><RiCompassDiscoverLine size={27} /></a></p>
    <p><a href='#followRequest'><AiOutlineHeart size={27} /></a></p>
    <p><a href='#profile'><CgProfile size={27} /></a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar gradient__bg'>
      <div className='navbar-container'>
        <div className='navbar-links__name'>
            Instagram
        </div>
        <div className='navbar-links'>
        <div className='navbar-search'>
          <TextField 
            id="outlined-basic"
            variant='outlined'
            fullWidth
            label="Search"
          />
        </div>
          <div className='navbar-links__container'>
            <Menu /> 
          </div>
          <div className='navbar-menu'>
            {toggleMenu && (
              <Menu />
            )}
            {toggleMenu
              ? <RiCloseLine color="000" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="000" size={27} onClick={() => setToggleMenu(true)} />
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar