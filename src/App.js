import { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Room from './Room.js';

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

  return (
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
  );
}
// Array, das alles drin hat, was vorher war und alles danach, dazwichen ein Object, das alles drin hat, was vorher drin war und nur das isClean wurde ausgetauscht
