import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Layout.css';
import { useMoodChangeContext } from "../../context/MoodChange";

const Layout = () => {
  const { handleMoodChange, mood } = useMoodChangeContext();

  return (
    <>
    <nav className={mood === 'dark' ? 'dark-nav': ''}>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <button className="mood-change-button" onClick={handleMoodChange}>Mood Change</button>
      </ul>
    </nav>
     <Outlet />
    </>
  );
};

export default Layout;