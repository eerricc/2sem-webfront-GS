import { Link } from 'react-router-dom';
import Sun from '../../assets/sun.webp';
import React, { useState, useEffect } from 'react';

const Nav = () => {
  
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    const handleLoginChange = () => {
      setCurrentUser(sessionStorage.getItem("user")); 
    };

    window.addEventListener("loginChange", handleLoginChange);

    return () => {
      window.removeEventListener("loginChange", handleLoginChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    const event = new Event("loginChange"); 
    window.dispatchEvent(event);
    alert("Usuário deslogado com sucesso.");
  };

  return (
    <div className="flex justify-between items-center mb-auto p-8 bg-[var(--gray2)]">
      <Link to="/">
        <img src={Sun} alt="sun" className="h-10" />
      </Link>

      <ul className="flex gap-4">
        <li><Link to="/about" className="btn text-[var(--gray2)] bg-[var(--green1)] hover:bg-[var(--green2)]">About</Link></li>
        <li><Link to="/solution" className="btn text-[var(--gray2)] bg-[var(--blue1)] hover:bg-[var(--blue2)]">Solution</Link></li>
        <li>{currentUser ? 
            ( <button onClick={handleLogout} className="btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]">Logout</button> ) 
            :
            ( <Link to="/login" className="btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]">Login</Link> )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
