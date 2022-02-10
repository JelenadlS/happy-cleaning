import './Navbar.css';
import { useState } from 'react';

export default function Navbar({ setCurrentPage, currentPage }) {
  const [isActive, setIsActive] = useState(false);

  function handleClickRooms() {
    setCurrentPage('rooms');
    setIsActive(!isActive);
  }

  function handleClickMates() {
    setCurrentPage('flatmates');
    setIsActive(!isActive);
  }

  return (
    <div className="Navbar">
      <button
        className={`Navbar__button ${isActive ? '' : 'Navbar__button--active'}`}
        onClick={handleClickRooms}
      >
        Rooms
      </button>
      <button
        className={`Navbar__button ${isActive ? 'Navbar__button--active' : ''}`}
        onClick={handleClickMates}
      >
        Flatmates
      </button>
    </div>
  );
}
