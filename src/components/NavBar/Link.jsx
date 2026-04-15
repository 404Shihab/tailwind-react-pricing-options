import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-blue-950 '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;