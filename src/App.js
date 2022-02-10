import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Room from './Room.js';
import Mates from './Mates';

export default function App() {
  const [rooms, setRooms] = useState([
    {
      text: 'Küche',
      description: 'Boden, Spüle',
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Teppich, Heizung',
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Waschbecken, Spiegel ',
      isClean: false,
    },
  ]);

  const [characters, setCharacters] = useState([]);

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
        {rooms.map((room, index) => (
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
      <main>
        <Header>Flat Mates</Header>
        <Mates characters={characters} />
      </main>
    </>
  );
}
