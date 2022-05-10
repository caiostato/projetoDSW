import React from 'react';
import 'https://kit.fontawesome.com/a076d05399.js'

function Menu() {
  return (
    // menu
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex items-center justify-between px-2 py-3 bg-zinc-700">
          <div className="container px-4 mx-auto flex items-center justify-between">
            
            {/* LINK ROUTER */}
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start hover:opacity-75">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
                Home
              </a>
            </div>
            <div className="flex lg:flex-grow items-center" id="example-navbar-info">

              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                {/* LINK ROUTER */}
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/user">
                    <i className="fas fa-street-view text-lg leading-lg text-white opacity-75"></i>
                  </a>
                </li>
                {/* LINK ROUTER */}
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/ponto">
                    <i className="fas fa-user text-lg leading-lg text-white opacity-75"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;