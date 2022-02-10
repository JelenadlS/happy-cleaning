import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Room from './Room.js';
import Mates from './Mates';
import Navbar from './Navbar';
import './Navbar.css';

export default function App() {
  const [rooms, setRooms] = useState(
    loadFromLocal('rooms') ?? [
      {
        text: 'Küche',
        description: 'Boden, Spüle',
      },
      {
        text: 'Wohnzimmer',
        description: 'Teppich, Heizung',
      },
      {
        text: 'Bad',
        description: 'Waschbecken, Spiegel ',
      },
    ]
  );

  useEffect(() => {
    saveToLocal('rooms', rooms);
  }, [rooms]);

  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState('rooms');

  async function loadCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results.slice(0, 4));
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      <main className="App">
        <Header>Happy Cleaning!</Header>
        {currentPage === 'rooms' &&
          rooms.map((room, index) => (
            <Room
              key={room.text}
              text={room.text}
              description={room.description}
              isDescriptionVisible={room.isDescriptionVisible}
              isClean={room.isClean}
              toggleStatus={(event) => {
                event.stopPropagation();
                setRooms([
                  ...rooms.slice(0, index),
                  { ...rooms[index], isClean: !room.isClean },
                  ...rooms.slice(index + 1),
                ]);
              }}
            />
          ))}
      </main>
      {currentPage === 'flatmates' && (
        <main>
          <Header>Flat Mates</Header>
          <Mates characters={characters} />
        </main>
      )}
      <Navbar setCurrentPage={setCurrentPage} />
    </>
  );

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
