import React from 'react';

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
    return (
      <nav>
        <ul className='flex'>
          {
            navigationData.map(route => <li className='mr-10'>
            <a href={route}>{route.name}</a></li>)
          }
        </ul>
      </nav>
    );
};

export default NavBar;