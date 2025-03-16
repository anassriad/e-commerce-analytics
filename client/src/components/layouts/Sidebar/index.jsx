import React from 'react';
import { MdDashboard } from "react-icons/md";
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      
      <nav className="groups">
        <div className="group">
          <div className="title"><p>MENU</p></div>
          <ul>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
          </ul>
        </div>

        <div className="group">
          <div className="title"><p>OTHERS</p></div>
          <ul>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
            <li className="item"><MdDashboard className='mdi' /> Dashboard</li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;