import React from "react";
import Link from './Link'
const navigation = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigation.map((route) => (
          <Link key={route.key} route={route}></Link>
        ))}
      </ul>

      {/* <ul className="flex ">
        {
            navigation.map(route=><li className='mr-10'>
            <a href={route.path}>{route.name}</a>
                </li>)
        }
      </ul> */}

      {/* <ul className='flex'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
            </ul> */}
    </nav>
  );
};

export default Navbar;
