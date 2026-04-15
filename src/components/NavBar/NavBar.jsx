import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const  navigationData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Portfolio",
    "path": "/portfolio"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map(route => <li className='mr-10'>
            <a href={route}>{route.name}</a></li>)
    return (
      <nav className='flex justify-between mx-10'>
        <span className='flex'onClick={()=> setOpen(!open)}>
          {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
          <ul className='md:hidden'>
            {
              links
            }
          </ul>

          <h3 className='ml-4'>My Nab Bar</h3>
        </span>
        <ul className='md:flex hidden'>
          {
            links
          }
        </ul>
        <button className='btn btn-primary'>Sign In</button>
      </nav>
    );
};

export default NavBar;