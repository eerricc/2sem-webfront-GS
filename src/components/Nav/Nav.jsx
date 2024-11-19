import { Link, useNavigate } from 'react-router-dom';
import Sun from '../../assets/sun.webp';
import Moon from '../../assets/moon.png';
import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("user"));
  const navigate = useNavigate();

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

  const handleSolutionAccess = (e) => {
    if (!currentUser) {
      e.preventDefault();
      alert("Apenas usuários logados podem acessar esta página!");
    }
  };

  return (
    <div className="flex justify-between items-center mb-auto p-8 bg-[var(--gray2)]">
      <Link to="/">
        <img src={darkMode ? Moon : Sun} alt="home-icon" className="h-10" />
      </Link>

      <ul className="hidden sm:flex gap-4 items-center">
        <li><Link to="/about" className="btn text-[var(--gray2)] bg-[var(--green1)] hover:bg-[var(--green2)]">About</Link></li>
        <li><Link to="/solution" className="btn text-[var(--gray2)] bg-[var(--blue1)] hover:bg-[var(--blue2)]" onClick={handleSolutionAccess}>Solution</Link></li>
        <li>
          {currentUser ? 
            (<button onClick={handleLogout} className="btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]">Logout</button>)
            :
            (<Link to="/login" className="btn text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)]">Login</Link>)}</li>
        <li>
          <button onClick={toggleDarkMode} className="btn bg-[var(--gray1)]">
            {darkMode ? "Light" : "Dark"}
          </button>
        </li>
      </ul>

      <div className="flex flex-col justify-between w-8 h-8 sm:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
        <span className="w-full h-1.5 rounded-sm bg-[var(--gray0)]"></span>
        <span className="w-full h-1.5 rounded-sm bg-[var(--gray0)]"></span>
        <span className="w-full h-1.5 rounded-sm bg-[var(--gray0)]"></span>
      </div>

      <ul
        className={`absolute top-16 right-0 flex-col w-full bg-[var(--gray2)] items-center py-4 px-2 sm:hidden ${menuOpen ? "flex" : "hidden"}`}>
        <li className='w-full'><Link to="/about" className="btn w-full block text-center text-[var(--gray2)] bg-[var(--green1)] hover:bg-[var(--green2)] my-1">About</Link></li>
        <li className='w-full'><Link to="/solution" className="btn w-full block text-center text-[var(--gray2)] bg-[var(--blue1)] hover:bg-[var(--blue2)] my-1" onClick={handleSolutionAccess}>Solution</Link></li>
        <li className='w-full'>
          {currentUser ? 
          (<button onClick={handleLogout} className="btn w-full block text-center text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)] my-1">Logout</button>)
          : 
          (<Link to="/login" className="btn w-full block text-center text-[var(--gray2)] bg-[var(--yellow0)] hover:bg-[var(--yellow1)] my-1">Login</Link>)}</li>
        <li className='w-full'>
          <button onClick={toggleDarkMode} className=" w-full block text-center btn bg-[var(--gray1)] my-1">
            {darkMode ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
